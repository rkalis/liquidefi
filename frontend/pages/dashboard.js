// REACT & NEXT
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import liquidations from '../mocks/liquidations'
import camelCaseToWords from '../utils/camelCaseToWords'
import addrShortener from '../utils/addrShortener'
import ConfirmModal from '../components/ConfirmModal'
import LoadingSpinner from '../components/LoadingSpinner'

const PieChart = dynamic(() => import('../components/PieChart'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const chartSize = 200

const Dashbboard = () => {
  const[showModal, setShowModal] = useState(false)
  const[modalType, setModalType] = useState('')
  
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

  return (
    <Layout>
      <div className="dashboard">
        <section className="share-area">
          <div className="chart">
            <PieChart
              data={[
                { name: 'Group A', value: 50 },
                { name: 'Group B', value: 500 },
              ]}
              baseSize={chartSize}
            />
          </div>
          <div className="info-and-actions">
            <h1>Share of Pool Ownership</h1>
            <h2>
              2.85<span>%</span>
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
                <span>100</span> SharkDai
              </h3>
              <h3 className="current-value">
                <span>150</span> DAI
              </h3>
            </div>
          </div>
        </section>
        <section className="liquidations-area">
          <h2>Latest Liquidations</h2>
          <ul className="liquidations-list">
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
          </ul>
        </section>
      </div>
      {showModal && <ConfirmModal type={modalType} closeModal={handleCloseModal}/>}
      <style jsx>{`
        .dashboard {
          background: rgba(255, 255, 255, 1);
          color: rgba(19, 27, 48, 1);
          max-width: 70rem;
          max-height: 90%;
          margin: 5rem;
          padding: 2rem;
          border-radius: 10px;
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
