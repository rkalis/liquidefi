import { useState } from 'react'
import { useStateValue } from '../state/state'
import camelCaseToWords from '../utils/camelCaseToWords'
import addrShortener from '../utils/addrShortener'
import sharkContractObjSetup from '../utils/sharkContractObj'
import daiContractObjSetup from '../utils/daiContractObj'
import { address as sharkAddr } from '../sharktoken-deployed'

// import Notify from "bnc-notify"
// var notify = Notify({
//   dappId: apiKey,       // [String] The API key created by step one above
//   networkId: networkId  // [Integer] The Ethereum network ID your Dapp uses.
// });

const ConfirmModal = ({ type, closeModal }) => {
  const [{ dapp }, dispatch] = useStateValue()
  const [amount, setAmount] = useState(0)
  const [confirmed, setConfirmed] = useState(false)
  const sharkContractObj = sharkContractObjSetup(dapp.web3)
  const daiContractObj = daiContractObjSetup(dapp.web3)
  const tokenamount = dapp.web3.utils.toBN(amount)
  const finalamount = dapp.web3.utils.toWei(tokenamount, 'ether')

  

  console.log({dapp})
  console.log('daiContractObj: ', daiContractObj)
  console.log('sharkContractObj: ', sharkContractObj)

  const handleActionCLick = (e) => {
    e.preventDefault()

    switch (type) {
      case 'deposit':
        async function submitDeposit() {
          let userallowance = await daiContractObj.methods
            .allowance(dapp.address, sharkAddr)
            .call({ from: dapp.address })
          userallowance = dapp.web3.utils.toBN(userallowance)
          userallowance = dapp.web3.utils.toWei(userallowance, 'ether')
          if (finalamount > userallowance) {
            await daiContractObj.methods
              .approve(sharkAddr, finalamount)
              .send({ from: dapp.address }).on('receipt',(hash) => {
                console.log('mined')
                setConfirmed(true)
                console.log({hash})
                // notify.hash(hash)
              })
            console.log(userallowance)
            await sharkContractObj.methods
              .deposit(finalamount)
              .send({ from: dapp.address }).on('receipt',(hash) => {
                console.log('deposit')
                setConfirmed(true)
                console.log({hash})
                // notify.hash(hash)
              })
          } else {
            await sharkContractObj.methods
              .deposit(finalamount)
              .send({ from: dapp.address }).on('receipt',(hash) => {
                console.log('else deposit')
                setConfirmed(true)
                console.log({hash})
                // notify.hash(hash)
              })
          }

          const sharktotalsupply = await sharkContractObj.methods
            .totalSupply()
            .call({ from: dapp.address })

            dispatch({
              type: 'SET_SHARK_TOTAL_SUPPLY',
              payload: sharktotalsupply
            })

          const usertotalsupply = await sharkContractObj.methods
            .balanceOf(dapp.address)
            .call({ from: dapp.address })

            dispatch({
              type: 'SET_SHARK_USER_BALANCE',
              payload: usertotalsupply
            })
        }
        submitDeposit()
        closeModal()
        break
      case 'withdraw':
        async function submitWithdrawal() {
          const withdrawresponse = await sharkContractObj.methods
            .withdraw(finalamount)
            .send({ from: dapp.address })
          console.log(withdrawresponse)
        }
        submitWithdrawal()
        closeModal()
        break
      default:
        break
    }
  }

  const handleSetAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleCloseModal = () => {
    closeModal()
  }

  return (
    <div className="ConfirmModal">
      <div className="modal-contents">
        <div className="header-area">
          <div className="boder-left" />
          <div className="circle">
            <img src="https://i.imgur.com/qGCfAI9.png" alt="logo" />
          </div>
          <div className="border-right" />
          <button className="closeModal" onClick={handleCloseModal}>
            X
          </button>
        </div>
        <div className="action-area">
          <form>
            <fieldset>
              <label htmlFor="amount">{camelCaseToWords(type)} Amount in DAI</label>
              <input
                type="number"
                name="amount"
                step="0.01"
                min="0.00"
                value={amount}
                onChange={handleSetAmount}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="address">Address</label>
              <input type="text" value={addrShortener(dapp.address)} disabled />
            </fieldset>
            <fieldset>
              <p>
                You will {`${type}`}: {500} DAI
              </p>
              <button className="form-action-btn" onClick={handleActionCLick}
                disabled={amount === 0}
              >
                {camelCaseToWords(type)}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="modal-overlay" />
      <style jsx>{`
        .ConfirmModal {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 1;
        }
        .modal-contents {
          color: rgba(19, 27, 48, 1);
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 10px;
          overflow: hidden;
          position: absolute;
          z-index: 2;
          border: 3px solid rgba(19, 27, 48, 1);
        }
        .modal-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }
        .action-area {
          background: white;
        }
        fieldset,
        label,
        input {
          display: block;
        }
        label {
          text-align: left;
        }
        fieldset {
          border: none;
          border-bottom: 1px solid #ccc;
          padding: 20px;
          text-align: center;
        }
        input {
          font-size: 1.2rem;
          appearance: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 5px;
          width: 100%;
        }
        label {
          margin-bottom: 5px;
        }
        button.form-action-btn {
          background: ${type === 'deposit' ? 'green' : 'red'};
          margin: auto;
        }
        .confirm-buttons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 40px 20px 40px;
        }
        .header-area {
          background: rgba(19, 27, 48, 1);
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ccc;
          position: relative;
        }
        .boder-left,
        .border-right {
          height: 2px;
          width: 100px;
          background: white;
        }
        .circle {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          overflow: hidden;
          border: 3px solid white;
        }
        button.yes {
          background: green;
        }
        button.no {
          background: red;
          margin-right: 0;
        }
        .closeModal {
          max-width: 30px;
          max-height: 30px;
          position: absolute;
          top: 10px;
          right: -10px;
          color: black;
          padding: 3px 5px;
          line-height: 1;
        }
      `}</style>
    </div>
  )
}

export default ConfirmModal
