import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Timer from './components/Timer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Timer />
  </StrictMode>,
)
