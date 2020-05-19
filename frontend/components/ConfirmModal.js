import { useState } from 'react'
import { useStateValue } from '../state/state'
import camelCaseToWords from '../utils/camelCaseToWords'
import addrShortener from '../utils/addrShortener'

const ConfirmModal = ({type, closeModal}) => {
  const [{ dapp }, dispatch] = useStateValue()
  const [modalState, setModalState] = useState(0)
  const [amount, setAmount] = useState(0)
  console.log(dapp)

  const handleActionCLick = () => {
    switch (type) {
      case 'deposit':
        console.log('deposit')
        setModalState(1)
        break
      case 'withdraw':
        console.log('withdraw')
        setModalState(1)
        break
      default:
        break
    }
  }

  const handleConfirmClick = (e) => {
    switch (e.target.id) {
      case 'yes':
        console.log('yes')
        break
      case 'no':
        console.log('no')
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
          <div className="boder-left"/>
          <div className="circle">
            <img src="https://i.imgur.com/qGCfAI9.png" alt="logo" />
          </div>
          <div className="border-right"/>
          <button className="closeModal" onClick={handleCloseModal}>X</button>
        </div>
        {modalState === 0 && (
          <div className="action-area">
            <form>
              <fieldset>
                <label htmlFor="amount">{camelCaseToWords(type)} Amount</label>
                <input type="number" name="amount" step="0.01" min="0.00" value={amount} onChange={handleSetAmount}/>
              </fieldset>
              <fieldset>
                <label htmlFor="address">Address</label>
                <input type="text" value={addrShortener(dapp.address)} disabled />
              </fieldset>
              <fieldset>
                <p>You will {`${type}`}: {500} DAI</p>
                <button className="form-action-btn" onClick={handleActionCLick}>
                  {camelCaseToWords(type)}
                </button>
              </fieldset>
            </form>
          </div>
        )}
        {modalState === 1 && (
          <div className="action-area">
            <br/>
            <div style={{textAlign: 'center'}}>
              <h1>Are you sure?</h1>
            </div>
            <div className="confirm-buttons">
              <button className="yes" onClick={handleConfirmClick} id="yes">
                YES
              </button>
              <button className="no" onClick={handleCloseModal} id="no">
                No
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="modal-overlay"/>
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
          background: rgba(0,0,0,.5);
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
        label{ text-align: left; }
        fieldset { 
          border: none;
          border-bottom: 1px solid #CCC;
          padding: 20px;
          text-align: center;
        }
        input {
          font-size: 1.2rem;
          appearance: none;
          border: 1px solid #CCC;
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
        button.yes {background: green;}
        button.no {background: red; margin-right: 0;}
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
