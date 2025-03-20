import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import `TabSpoofer` from the file inside the `components` folder
import TabSpoofer from './components/TabSpoofer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* setup TabSpoofer component */}
    <TabSpoofer />
    
  </StrictMode>,
)
