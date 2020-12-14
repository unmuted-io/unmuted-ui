import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { UALProvider, withUAL } from 'ual-reactjs-renderer'
import { Scatter } from 'ual-scatter'
import { KeycatAuthenticator } from '@telosnetwork/ual-telos-keycat'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux'
import * as serviceWorker from './serviceWorker'
import Config from './configure'
import Spinner from './components/spinner/Spinner'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './index.scss'
import './assets/fonts/feather/css/feather.css'
import 'flag-icon-css/sass/flag-icon.scss'
import { createBrowserHistory } from 'history'

const { REACT_APP_CHAIN_ID, REACT_APP_RPC_PROTOCOL, REACT_APP_RPC_HOST, REACT_APP_RPC_PORT } = process.env

const TELOS_MAINNET = {
  chainId: REACT_APP_CHAIN_ID,
  rpcEndpoints: [
    {
      protocol: REACT_APP_RPC_PROTOCOL,
      host: REACT_APP_RPC_HOST,
      port: REACT_APP_RPC_PORT,
    },
  ],
}

const keycat = new KeycatAuthenticator([TELOS_MAINNET], { appName: 'Unmuted.io' })
const scatter = new Scatter([TELOS_MAINNET], { appName: 'Unmuted.io' })

const App = lazy(() => import('./App/App'))

const MyUALConsumer = withUAL(App)
MyUALConsumer.displayName = 'Unmuted.io'

console.echo = (variable) => console.log(`${variable}: `, variable)
const root = document.getElementById('root')
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={Config.basename} history={history}>
      <Suspense fallback={<Spinner />}>
        <UALProvider chains={[TELOS_MAINNET]} authenticators={[scatter, keycat]} appName={'Unmuted.io'}>
          <MyUALConsumer />
        </UALProvider>
        ,
      </Suspense>
    </BrowserRouter>
  </Provider>,
  root
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
