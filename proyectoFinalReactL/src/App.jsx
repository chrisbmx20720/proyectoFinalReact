import { BrowserRouter } from "react-router-dom"
import {Routing} from './routes/Routing'
import MyNavbar from "./components/navbar/Navbar"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <MyNavbar/>
      <Routing/>
    </BrowserRouter>
    </>
  )
}

export default App
