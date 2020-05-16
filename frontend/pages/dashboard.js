// REACT & NEXT
import React, {useState} from 'react'
import Layout from '../components/Layout'
import liquidations from '../mocks/liquidations'

const Dashbboard = () => {
  return (
    <Layout>
      <main role="main">
        <div className="dashboard">
          <section className="share-area">
            <div className="chart"></div>
            <div className="info"></div>
          </section>
          <section className="liquidations-area">
            <h2>Liquidations</h2>
            <ul className="liquidations-list">
              <li>
                {liquidations.map((liquidation, idx) => {
                  return (
                    <a key={idx} href={`https://rinkeby.etherscan.io/tx/${liquidation.txAddr}`}>
                      <ul>
                        <li>{liquidation.liquidatedAddr}</li>
                        <li>{liquidation.liquidatorAddr}</li>
                        <li>{liquidation.collateralToken}</li>
                        <li>{liquidation.principalToken}</li>
                        <li>{liquidation.liquidationPrice}</li>
                      </ul>
                    </a>
                  )
                })}
              </li>
            </ul>
          </section>
        </div>
      </main>
      <style jsx>{`
        main {
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex: 1;
        }
      `}</style>
    </Layout>
  )
}

export default Dashbboard
