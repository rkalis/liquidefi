import Onboard from 'bnc-onboard'
let onboard = undefined
const getOnboard = function (subscriptions) {
  if (!onboard) {
    onboard = Onboard({
      dappId: '482ea5f0-5482-4017-8f49-3e122720d788',
      subscriptions,
      networkId: 3,
      walletSelect: {
        wallets: [{ walletName: 'metamask', preferred: true }],
      },
    })
  }
  return onboard
}

export default getOnboard
