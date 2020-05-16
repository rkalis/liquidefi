import Onboard from 'bnc-onboard'
let onboard = undefined
const getOnboard = function (subscriptions) {
  if (!onboard) {
    onboard = Onboard({
      subscriptions,
      hideBranding: true,
      networkId: 4,
      walletSelect: {
        wallets: [{ walletName: 'metamask', preferred: true }],
      },
    })
  }
  return onboard
}

export default getOnboard
