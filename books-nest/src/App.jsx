import { Outlet } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './css/App.css'

function App() {


  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>     
    </>
  )
}

export default App
