import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './Component/Redux/Store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>

    <App />
    <ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
    </Provider>
  </StrictMode>,
)
