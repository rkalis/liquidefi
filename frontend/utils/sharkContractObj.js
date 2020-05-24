import { address, abi } from '../sharktoken-deployed'

export default function sharkContractObjSetup (dappWeb3) {
  return new dappWeb3.eth.Contract(abi, address)
}