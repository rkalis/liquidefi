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
    case 'SET_WEB3':
      newState.web3 = action.payload
      return { ...state, ...newState }
    case 'SET_SHARK_TOTAL_SUPPLY':
      newState.sharkTotalSupply = action.payload
      return { ...state, ...newState }
    case 'SET_SHARK_USER_BALANCE':
      newState.sharkuserBalance = action.payload
      return { ...state, ...newState }
    case 'SET_USERS_TOKEN_VALUE_IN_DAI':
      newState.daiValueofYourSharkTokens = action.payload
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
