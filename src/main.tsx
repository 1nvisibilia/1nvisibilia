import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (typeof screen.orientation === "string" && screen.orientation !== "undefined") {
  alert("This site is best viewed on desktop browser, or mobile with desktop view!");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
