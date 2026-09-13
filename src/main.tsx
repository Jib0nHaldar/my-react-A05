import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Category from './components/Category'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Nav/>
   <Banner/>
   <Category/>
   <Footer/>
  </StrictMode>,
)
