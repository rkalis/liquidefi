import Onboard from 'bnc-onboard'
let onboard = undefined
// require('dotenv').config() 

const BLOCKNATIVE_KEY='077cfa36-3476-4f7f-9a18-d6d478186cda'
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
