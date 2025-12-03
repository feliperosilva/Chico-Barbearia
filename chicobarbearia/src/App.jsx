import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Age from "./components/Age/Age"
import FullSite from "./components/FullSite/FullSite"
import Denied from "./components/Denied/Denied"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Age />}/>
          <Route path="/home" element={<FullSite />}/>
          <Route path="/denied" element={<Denied />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
