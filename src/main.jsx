import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './navbar.jsx'
import Footer from "./footer.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)
