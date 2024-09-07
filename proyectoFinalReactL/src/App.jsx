import { BrowserRouter } from "react-router-dom"
import {Routing} from './routes/Routing'
import Navbar from "./components/navbar/Navbar"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routing/>
    </BrowserRouter>
    </>
  )
}

export default App
