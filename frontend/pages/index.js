// REACT & NEXT
import React, {useState} from 'react'
import Layout from '../components/Layout'
import Typist from 'react-typist'
import dynamic from 'next/dynamic'

const delayTime = 4;
const SignInArea = dynamic(() => import('../components/SignInArea'), { ssr: false })

const Home = () => {
  const [speechDone, setSpeechDone] = useState(false)
  const handleFinishedSpeech = () =>{
    setSpeechDone(true)
  }
  return (
    <Layout>
      <main role="main">
        <div
          className="landing-container animate__animated animate__fadeIn"
          style={{ '--animate-duration': `${delayTime}s` }}
        >
          <div className="image-container">
            <img className="ripster" src="images/ripster.png" alt="ripster" />
          </div>
          <div className="text">
            <Typist cursor={{ show: false }} stdTypingDelay={0} avgTypingDelay={60} onTypingDone={handleFinishedSpeech}>
              <Typist.Delay ms={delayTime*1000} />
              <h1>Hey Kid</h1>
              <p>Join up with the sharks and we can get all the liquidity you need buddy!</p>
              <p>All yas gotta do is put some ETH in the pool, and our bots will do the rest.</p>
              <p>Everyone gets an even share and we will keep you posted on what its worth as we liquidate these fools.</p>
            </Typist>
            {speechDone && (
              <div className="animate__animated animate__fadeIn">
                <SignInArea fs={'2rem'} stretch/>
              </div>
            )}
          </div>
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

        .landing-container {
          padding: 40px;
          background: rgba(255, 255, 255, 0.7);
          margin: auto;
          display: flex;
          flex: 0 0 800px; 
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
          width: 500px;
        }

        .text {
          display: inline-block;
          color: rgba(19, 27, 48, 1);
          width: 450px;
        }
      `}</style>
    </Layout>
  )
}

export default Home
