import { abi } from '../daitoken-deployed'
const address = '0xcb1fe6f440c49e9290c3eb7f158534c2dc374201'

export default function aDaiContractObjSetup (dappWeb3) {
  return new dappWeb3.eth.Contract(abi, address) 
}

