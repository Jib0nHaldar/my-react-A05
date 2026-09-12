import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Nav/>
   <Banner/>
   <Footer/>
  </StrictMode>,
)
