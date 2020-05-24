import { useStateValue } from '../state/state'
import getOnboard from '../utils/Onboarding'
import addrShortener from '../utils/addrShortener'
import Link from 'next/link'
import Web3 from 'web3'

const SignInArea = ({ stretch, fs }) => {
  const [{ dapp }, dispatch] = useStateValue()

  const onboard = getOnboard({
    address: (address) => {
      dispatch({
        type: 'SET_ADDRESS',
        payload: address,
      })
    },
    network: (network) => {
      dispatch({
        type: 'SET_NETWORK',
        payload: network,
      })
    },
    balance: (balance) => {
      dispatch({
        type: 'SET_BALANCE',
        payload: balance,
      })
    },
    wallet: (wallet) => {
      let web3 = new Web3(wallet.provider)
      dispatch({
        type: 'SET_WALLET',
        payload: wallet,
      })
      dispatch({
        type: 'SET_WEB3',
        payload: web3,
      })
    },
  })

  const handleSignInClick = async () => {
    await onboard.walletSelect()
    await onboard.walletCheck()
  }

  return (
    <div className="sign-in-wrap">
      {
        dapp.balance < 0  ? (
          <button onClick={handleSignInClick} onKeyUp={handleSignInClick}>
            Sign In
          </button>
        ) : (
          <>
            <div className="dashboard-btn-wrap">
              <Link href="/dashboard">
                <a>
                  <button className="go-to-dash-board">Go to Dashboard</button>
                </a>
              </Link>
            </div>
            <div className="wallet-addr">
              {
                dapp.address && addrShortener(dapp.address)
              }
            </div>
          </>
        )
      }
      <style jsx>{`
        .sign-in-wrap{
          display: flex;
          align-items: center;
        }
        .dashboard-btn-wrap {
          margin-right: 20px;
        }

        button {
          border-radius: 4px;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px 10px;
          font-size: 0.8rem;
          background-color: rgba(0, 52, 132, 1);
          width: ${stretch ? '100%' : 'auto'};
          font-size: ${fs ? fs : 'inherit'};
        }
      `}</style>
    </div>
  )
}

export default SignInArea
