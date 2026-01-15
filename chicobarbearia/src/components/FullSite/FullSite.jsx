import Navbar from '../Navbar/Navbar'
import About from "../About/About"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import Services from "../Services/Services"
import Professionals from "../Professionals/Professionals"
import Footer from "../Footer/Footer"
import Faq from "../FAQ/Faq"
import Space from '../Space/Space'
import WhatsApp from '../WhatsApp/WhatsApp'
import { Navigate } from 'react-router-dom'
import { useRef } from 'react'

const FullSite = () => {
  const bukRef = useRef(null)
  const bukScroll = () => {
    bukRef.current?.scrollIntoView({ behavior : 'smooth' })
  }
  const ageVerified = localStorage.getItem('ageVerified') === 'true'

  if (!ageVerified) {
    return <Navigate to='/' replace />
  }
  
  return (
    <>
        <Navbar />
        <Banner onBook={bukScroll}/>
        <About />
        <Space />
        <Services onBook={bukScroll} bukRef={bukRef}/>
        <Professionals />
        <Faq onBook={bukScroll}/>
        <Contact />
        <Footer />      
        <WhatsApp 
          phone='351928489012'
          message='Olá, Chico Barbearia Nudista! // Hello, Chico Barbearia Nudista!'
        />      
    </>
  )
}

export default FullSite
