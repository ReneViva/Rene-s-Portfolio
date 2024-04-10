import React, { useEffect } from 'react'
import { Outlet, Link , useLocation} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import cursor from '../files/code.png'
import hireMe from '../files/hire.png'
export default function MainLayout() {

  
  const location = useLocation()
  useEffect(() => {
    if (location.pathname == "/about/programming") {
      document.body.style.cursor = `url(${cursor}),auto`;
    }
    else if (location.pathname ==='/contact'){
      document.body.style.cursor = `url(${hireMe}),auto`;
    } else {
      document.body.style.cursor = `auto`;
    }
  }, [location]);
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
