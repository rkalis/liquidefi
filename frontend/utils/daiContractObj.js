import { address, abi } from '../daitoken-deployed'

export default function daiContractObjSetup (web3) {
  return new web3.eth.Contract(abi, address)
}