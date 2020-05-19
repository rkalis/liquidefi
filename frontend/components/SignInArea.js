import { useStateValue } from '../state/state'
import getOnboard from '../utils/Onboarding'
import addrShortener from '../utils/addrShortener'

const SignInArea = ({stretch, fs}) => {
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
      {dapp.wallet.name === 'TEST' ? (
        <button onClick={handleSignInClick} onKeyUp={handleSignInClick}>
          Sign In
        </button>
      ) : (
        <table>
          <tbody>
            <tr className="wallet-row">
              <td>
                <b>Wallet:</b>
              </td>
              <td>{dapp.wallet.name}</td>
            </tr>
            <tr className="address-row">
              <td>
                <b>Address:</b>
              </td>
              <td>{dapp.address && addrShortener(dapp.address)}</td>
            </tr>
            <tr className="network-row">
              <td>
                <b>Network:</b>
              </td>
              <td>{dapp.network}</td>
            </tr>
            <tr className="balance-row">
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
      <style jsx>{`
        .wallet-row,
        .address-row,
        .network-row,
        .balance-row { display: none; }
        
        .address-row { display: block; }
        .address-row b{ display: none; }
        
        button {
          border-radius: 4px;
          border: none;
          color:white;
          cursor: pointer;
          padding: 5px 10px;
          font-size: .8rem;
          background-color: rgba(0,52,132,1.0);
          width: ${stretch ? '100%' : 'auto' };
          font-size: ${fs ? fs : 'inherit'}
        }
      `}</style>
    </div>
  )
}

export default SignInArea
