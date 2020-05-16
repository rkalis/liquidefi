// REACT & NEXT
import React, { useState } from 'react'
import Layout from '../components/Layout'
import PieChart from '../components/PieChart'
import liquidations from '../mocks/liquidations'

const Dashbboard = () => {
  return (
    <Layout>
      <main role="main">
        <div className="dashboard">
          <section className="share-area">
            <div className="chart">
              <PieChart data={[
                { name: 'Group A', value: 50 },
                { name: 'Group B', value: 500 },
              ]}/>
            </div>
            <div className="info-and-actions">
              <h4>Share of Pool Ownership</h4>
              <div><b>2.85<span>%</span></b></div>
              <div className="actions">
                <button className="deposit" onClick={console.log('DEPOSIT')}>Deposit</button>
                <button className="withdraw" onClick={console.log('WITHDRAW')}>Withdraw</button>
              </div>
              <div className="stats">
                <div className="sharkdai-tokens"><b>100 SharkDai</b></div>
                <div className="current-value"><b>150</b>DAI</div>
              </div>
            </div>
          </section>
          <section className="liquidations-area">
            <h2>Liquidations</h2>
            <ul className="liquidations-list">
              <li>
                {liquidations.map((liquidation, idx) => {
                  return (
                    <a
                      key={idx}
                      href={`https://rinkeby.etherscan.io/tx/${liquidation.txAddr}`}
                    >
                      <ul>
                        <li>
                          <b>txAddr: </b>
                          <span>{liquidation.txAddr}</span>
                        </li>
                        <li>
                          <b>liquidatedAddr: </b>
                          <span>{liquidation.liquidatedAddr}</span>
                        </li>
                        <li>
                          <b>liquidatorAddr: </b>
                          <span>{liquidation.liquidatorAddr}</span>
                        </li>
                        <li>
                          <b>collateralToken: </b>
                          <span>{liquidation.collateralToken}</span>
                        </li>
                        <li>
                          <b>principalToken: </b>
                          <span>{liquidation.principalToken}</span>
                        </li>
                        <li>
                          <b>collateralAmount: </b>
                          <span>{liquidation.collateralAmount}</span>
                        </li>
                        <li>
                          <b>principalAmount: </b>
                          <span>{liquidation.principalAmount}</span>
                        </li>
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
