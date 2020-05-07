import React from 'react'
import Layout from '../layout/'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../index.scss'
import fontAwesomeIcon from '../utility/icons/fontawesome'
import { ToastProvider } from 'react-toast-notifications'

library.add(fontAwesomeIcon)

const App = () => {
  return (
    <ToastProvider placement='bottom-center'>
      <Layout />
    </ToastProvider>
  )
}

export default App
