import './App.css'
import Navber from './components/Navber'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navber />
      <Login />
      <div className="p-8">
        <h1>Vite + React</h1>
      </div>
      <Footer />
    </>
  )
}

export default App
