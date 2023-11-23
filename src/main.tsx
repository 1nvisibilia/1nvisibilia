import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { detectMob } from './utils/viewport.tsx';

if (detectMob()) {
  alert("This site is best viewed on desktop browser, or mobile with desktop view!");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
