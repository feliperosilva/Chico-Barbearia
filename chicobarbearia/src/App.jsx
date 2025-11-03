import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import Professionals from "./components/Professionals/Professionals"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Professionals />
        <Contact />
      </Router>      
    </div>
  )
}

export default App
