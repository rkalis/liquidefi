import { useStateValue } from '../state/state'
import getOnboard from '../utils/Onboarding'
import addrShortener from '../utils/addrShortener'

const SignInArea = () => {
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
      dispatch({
        type: 'SET_WALLET',
        payload: wallet,
      })
    },
  })

  const handleSignInClick = async () => {
    await onboard.walletSelect()
    await onboard.walletCheck()
  }

  return (
    <div>
      {dapp === undefined ? (
        <button onClick={handleSignInClick} onKeyUp={handleSignInClick}>
          Sign In
        </button>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>
                <b>Wallet:</b>
              </td>
              <td>{dapp.wallet.name}</td>
            </tr>
            <tr>
              <td>
                <b>Address:</b>
              </td>
              <td>{dapp.address && addrShortener(dapp.address)}</td>
            </tr>
            <tr>
              <td>
                <b>Network:</b>
              </td>
              <td>{dapp.network}</td>
            </tr>
            <tr>
              <td>
                <b>Balance:</b>
              </td>
              <td>
                {dapp.balance &&
                  String(web3.fromWei(dapp.balance, 'ether')).substring(0, 5)}{' '}
                ETH
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SignInArea
