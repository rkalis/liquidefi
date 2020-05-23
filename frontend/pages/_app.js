import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'

import 'animate.css/animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp