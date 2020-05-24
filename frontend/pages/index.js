// REACT & NEXT
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Typist from 'react-typist'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useStateValue } from '../state/state'
import sharkContractObjSetup from '../utils/sharkContractObj'

const delayTime = 4;
const SignInArea = dynamic(() => import('../components/SignInArea'), { ssr: false })

const Index = () => {
  const [{ dapp }, dispatch] = useStateValue()
  const [speechDone, setSpeechDone] = useState(false)
  const handleFinishedSpeech = () => setSpeechDone(true)

  useEffect(() => {
    if(dapp.web3 !== undefined && dapp.address !== undefined) {
      const sharkContractObj = sharkContractObjSetup(dapp.web3)

      const myAsync = async function () {
        if(dapp.address) {
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
      }
      myAsync()
    }
  }, [dapp.web3, dapp.address])

  return (
    <Layout>
      <div
        className="landing-container animate__animated animate__fadeIn"
        style={{ '--animate-duration': `${delayTime}s` }}
      >
        <div className="image-container">
          {/* <img className="ripster" src="images/ripster.png" alt="ripster" /> */}
        </div>
        <div className="text">
          {/* <Typist cursor={{ show: false }} stdTypingDelay={0} avgTypingDelay={60} onTypingDone={handleFinishedSpeech}>
            <Typist.Delay ms={delayTime*1000} />
            <h1>Hey Kid</h1>
            <p>Join up with the sharks and we can get all the liquidity you need buddy!</p>
            <p>All yas gotta do is put some DAI in the pool, and our bots will do the rest.</p>
            <p>Everyone gets an even share and we will keep you posted on what its worth as we liquidate these fools.</p>
          </Typist> */}
          {
            /* {speechDone && ( */
            dapp.balance >= 0 ? (
              <Link href="/dashboard">
                <a>
                  <button className="go-to-dash-board">Go to Dashboard</button>
                </a>
              </Link>
            ) : (
              <div className="animate__animated animate__fadeIn">
                <SignInArea fs={'2rem'} stretch/>
              </div>
            )
            
            //)
          }
        </div>
      </div>
      <style jsx>{`
        .landing-container {
          padding: 40px;
          background: rgba(255, 255, 255, 0.7);
          margin-top: 2rem;
          display: flex;
          flex: 0 0 1000px; 
          align-items: top;
          color: rgba(20, 26, 42, 1);
        }

        .image-container {
          display: inline-block;
          border-right: 2px solid rgba(19, 27, 48, 0.1);
          padding-right: 40px;
          margin-right: 40px;
        }

        .ripster {
          transform: scaleX(-1);
          width: 300px;
        }

        @font-face {
          font-family: 'PKMN RBYGSC';
          src: url('fonts/PKMN-RBYGSC.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        .go-to-dash-board {
          border-radius: 4px;
          border: none;
          color:white;
          cursor: pointer;
          padding: 5px 10px;
          font-size: .8rem;
          background-color: rgba(0,52,132,1.0);
        }

        .text {
          display: inline-block;
          color: rgba(19, 27, 48, 1);
          width: 450px;
          font-family: 'PKMN RBYGSC';
          word-spacing: .5rem;
          font-size: 14px;
        }
      `}</style>
    </Layout>
  )
}

export default Index
