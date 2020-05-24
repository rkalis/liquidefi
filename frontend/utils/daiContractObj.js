import { address, abi } from '../daitoken-deployed'

export default function daiContractObjSetup (dappWeb3) {
  return new dappWeb3.eth.Contract(abi, address)
}