import Onboard from 'bnc-onboard'
let onboard = undefined
// require('dotenv').config() 

const BLOCKNATIVE_KEY='834729ff-3ae1-42ec-b770-95de5ff553a0'
const PORTIS_KEY='93af7f68-9323-44dc-b273-1fc684d666a3'

const getOnboard = function (subscriptions) {
  if (!onboard) {
    onboard = Onboard({
      dappId: BLOCKNATIVE_KEY,
      subscriptions,
      hideBranding: true,
      networkId: 3,
      walletSelect: {
        wallets: [
          { walletName: 'metamask', preferred: true },
          {
            walletName: 'portis',
            apiKey: PORTIS_KEY,
            preferred: true,
            label: 'Portis',
          },
        ],
      },
    })
  }
  return onboard
}

export default getOnboard
