import Navbar from '../Navbar/Navbar'
import About from "../About/About"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import Services from "../Services/Services"
import Professionals from "../Professionals/Professionals"
import Footer from "../Footer/Footer"
import Faq from "../FAQ/Faq"
import { Navigate } from 'react-router-dom'

const FullSite = () => {
  const ageVerified = localStorage.getItem('ageVerified') === 'true'

  if (!ageVerified) {
    return <Navigate to='/' replace />
  }
  
  return (
    <>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Professionals />
        <Faq />
        <Contact />
        <Footer />      
    </>
  )
}

export default FullSite
