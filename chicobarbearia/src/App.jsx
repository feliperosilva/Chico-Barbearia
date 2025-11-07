import { BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import Professionals from "./components/Professionals/Professionals"
import Footer from "./components/Footer/Footer"
import Faq from "./components/FAQ/Faq"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Professionals />
        <Faq />
        <Contact />
        <Footer />
      </Router>      
    </div>
  )
}

export default App
