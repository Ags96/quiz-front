import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// control de rutas (react-router-dom)
import { HashRouter } from 'react-router-dom'
// vincula la store con la app (redux)
import { Provider } from 'react-redux'
// vinculamos el provider con la store
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
