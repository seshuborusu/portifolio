import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Homs"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Education from "./components/education/Education"
import Contact from "./components/contact/Contact"
import { Route,Routes } from "react-router-dom"
import Usersdata from "./components/usersdata/Usersdata"
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
      <Routes>
        <Route path="/g" element={<Usersdata/>}/>
      </Routes>
    
      
    </div>
  )
}
export default App