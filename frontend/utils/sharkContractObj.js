import { address, abi } from '../sharktoken-deployed'

export default function sharkContractObjSetup (web3) {
  return new web3.eth.Contract(abi, address)
}