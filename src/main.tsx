import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Category from './components/Category'
import type { Technology } from './types/technology'


const userFetch = async () : Promise<Technology[]> => {
    const response = await fetch('technologies.json');
    const userData = await response.json();
    // console.log(userData);
    return userData;
}

const userPromise = userFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Banner />
    <Category />
    <Footer />
  </StrictMode>,
)
