function dappReducer(state = {}, action) {
  console.log('dappReducer', state, action)
  let newState = {}
  switch (action.type) {
    case 'SET_ADDRESS':
      newState.address = action.payload
      return { ...state, ...newState }
    case 'SET_NETWORK':
      newState.network = action.payload
      return { ...state, ...newState }
    case 'SET_BALANCE':
      newState.balance = action.payload
      return { ...state, ...newState }
    case 'SET_WALLET':
      newState.wallet = action.payload
      return { ...state, ...newState }
    default:
      return state
  }
}

export default function mainReducer({ dapp }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    dapp: dappReducer(dapp, action),
  }
}
