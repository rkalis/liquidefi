import { address, abi } from '../daitoken-deployed'
import { useStateValue } from '../state/state'

export default function daiContractObjSetup (web3) {
  const [{ dapp }, dispatch] = useStateValue()
  return new dapp.web3.eth.Contract(abi, address)
}