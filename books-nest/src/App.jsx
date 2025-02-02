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
    <LandingPage/>
    </main>
    <footer>
      <Footer/>
    </footer>     
    </>
  )
}

export default App
