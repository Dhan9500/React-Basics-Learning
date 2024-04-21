import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Appprop from './Appprop.jsx'
import Exerciseset2 from './Exerciseset2.jsx'
import PropDrilling from './PropDrilling.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Appprop />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Appprop /> */}
    {/* <Exerciseset2 /> */}
    <PropDrilling/>
  </React.StrictMode>,
)