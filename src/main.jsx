import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
