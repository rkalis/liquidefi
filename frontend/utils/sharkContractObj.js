import { address, abi } from '../sharktoken-deployed'
import { useStateValue } from '../state/state'

export default function sharkContractObjSetup (web3) {
  const [{ dapp }, dispatch] = useStateValue()
  return new dapp.web3.eth.Contract(abi, address)
}