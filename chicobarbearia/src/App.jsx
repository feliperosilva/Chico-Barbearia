import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import Professionals from "./components/Professionals/Professionals"
import Strip from "./components/Strip/Strip"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <Strip />
        <About />
        <Strip />
        <Services />
        <Professionals />
        <Contact />
      </Router>      
    </div>
  )
}

export default App
