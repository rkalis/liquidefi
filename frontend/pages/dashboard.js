// REACT & NEXT
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import liquidations from '../mocks/liquidations'
import camelCaseToWords from '../utils/camelCaseToWords'
import addrShortener from '../utils/addrShortener'
import ConfirmModal from '../components/ConfirmModal'
import BigLoadingSpinner from '../components/BigLoadingSpinner'
import sharkContractObjSetup from '../utils/sharkContractObj'
import aDaiContractObjSetup from '../utils/aDaiContractObj'
import { useStateValue } from '../state/state'
import MiningIndicator from '../components/MiningIndicator'

import { address as sharkContractAddress } from '../sharktoken-deployed'

const PieChart = dynamic(() => import('../components/PieChart'), {
  ssr: false,
  loading: () => <BigLoadingSpinner />,
})

const chartSize = 200

const Dashbboard = () => {
  const [{ dapp }, dispatch] = useStateValue()
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')

  const handleDepositClick = () => {
    console.log('DEPOSIT')
    setModalType('deposit')
    setShowModal(true)
  }

  const handleWithdrawClick = () => {
    console.log('WITHDRAW')
    setModalType('withdraw')
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const sharkContractObj = sharkContractObjSetup(dapp.web3)
    const aDaiContractObj = aDaiContractObjSetup(dapp.web3)
    
    aDaiContractObj.events.Transfer({
      filter: { to: sharkContractAddress }, // Using an array means OR: e.g. 20 or 23
      fromBlock: 'latest'
    })
    .on('data', async function(event){
      const daiValueofYourSharkTokens = await sharkContractObj.methods
      .fromSharkToken(dapp.sharkuserBalance)
      .call({ from: dapp.address })
      
      dispatch({
        type: 'SET_USERS_TOKEN_VALUE_IN_DAI',
        payload: daiValueofYourSharkTokens,
      })
    })
    .on('error', console.error);

    const myAsync = async function () {
      if (dapp.sharkuserBalance) {
        const daiValueofYourSharkTokens = await sharkContractObj.methods
          .fromSharkToken(dapp.sharkuserBalance)
          .call({ from: dapp.address })

        dispatch({
          type: 'SET_USERS_TOKEN_VALUE_IN_DAI',
          payload: daiValueofYourSharkTokens,
        })
      }
    }
    myAsync()
  }, [dapp.web3, dapp.address, dapp.sharkuserBalance])

  return (
    <Layout>
      {dapp.currentlyMining && (
          <div className="mining-state">
            <span>Mining... &nbsp;</span>
            <MiningIndicator />
          </div>
        )}
      <div className="dashboard">
        <section className="share-area">
          <div className="chart">
            {dapp.sharkTotalSupply !== undefined && dapp.sharkuserBalance !== undefined && (
              <PieChart
                data={[
                  {
                    name: 'Your Share',
                    value: +(dapp.sharkuserBalance / 10 ** 18).toFixed(3),
                  },
                  {
                    name: 'Everyone Else',
                    value: +(
                      dapp.sharkTotalSupply / 10 ** 18 -
                      dapp.sharkuserBalance / 10 ** 18
                    ).toFixed(3),
                  },
                ]}
                baseSize={chartSize}
              />
            )}
          </div>
          <div className="info-and-actions">
            <h1>Share of Pool Ownership</h1>
            <h2>
              {((dapp.sharkuserBalance / dapp.sharkTotalSupply) * 100).toFixed(2)}
              <span>%</span>
            </h2>
            <div className="actions">
              <button className="deposit" onClick={handleDepositClick}>
                Deposit
              </button>
              <button className="withdraw" onClick={handleWithdrawClick}>
                Withdraw
              </button>
            </div>
            <div className="stats">
              <h3 className="sharkdai-tokens">
                <span>{(Number(dapp.sharkuserBalance) / 10 ** 18).toFixed(3)}</span> Your
                SharkDai
              </h3>
              <h3 className="current-value">
                <span>
                  {(Number(dapp.daiValueofYourSharkTokens) / 10 ** 18).toFixed(3)}
                </span>{' '}
                Value in DAI
              </h3>
            </div>
          </div>
        </section>
        <section className="liquidations-area">
          {/* <h2>Latest Liquidations</h2>
          <p>Test Phase - get real data</p> */}
          {/* <ul className="liquidations-list">
            {liquidations.map((liquidation, idx) => {
              return (
                <li key={'liquidation-' + idx}>
                  <a
                    key={idx}
                    href={`https://rinkeby.etherscan.io/tx/${liquidation.txAddress}`}
                  >
                    <table>
                      <tbody className="liquidation-item-data">
                        {Object.keys(liquidation).map((key, idx) => {
                          return key !== 'collateralAmount' &&
                            key !== 'principalAmount' ? (
                            <tr key={key}>
                              <td>
                                <b>{camelCaseToWords(key)}:&nbsp;&nbsp;</b>
                              </td>
                              <td>
                                <span>
                                  {addrShortener(liquidation[key].toUpperCase())}
                                </span>
                              </td>
                            </tr>
                          ) : (
                            <tr key={key}>
                              <td>
                                <b>{camelCaseToWords(key)}:&nbsp;&nbsp;</b>
                              </td>
                              <td>
                                <span>{liquidation[key]}</span>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </a>
                </li>
              )
            })}
          </ul> */}
        </section>
      </div>
      {showModal && <ConfirmModal type={modalType} closeModal={handleCloseModal} />}
      <style jsx>{`
        .dashboard {
          background: rgba(255, 255, 255, 1);
          color: rgba(19, 27, 48, 1);
          max-width: 70rem;
          max-height: 90%;
          margin: 5rem;
          padding: 2rem;
          border-radius: 10px;
          position: relative;
        }
        .mining-state {
          position: absolute;
          right: 0;
          display: flex;
          padding: 10px 10px 0 0;
        }
        .share-area {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .chart {
          min-width: ${chartSize * 2 + 10}px;
          min-height: ${chartSize * 2 + 10}px;
          margin-right: 2rem;
        }
        .info-and-actions {
        }
        button.deposit {
          background: green;
        }
        button.withdraw {
          background: red;
        }
        .actions {
          margin-bottom: 40px;
        }

        .liquidations-list {
          max-height: 400px;
          overflow: auto;
        }
        .liquidations-list > li {
          margin-bottom: 10px;
          border: 1px solid black;
          border-radius: 4px;
          padding: 5px 10px;
        }
      `}</style>
    </Layout>
  )
}

export default Dashbboard
