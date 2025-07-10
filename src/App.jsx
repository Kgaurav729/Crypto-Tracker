import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import CryptoConverter from './pages/CryptoConverter'

function App() {

  return (
    <Router>
      <nav className="bg-gray-700 text-white p-4">
        <div className='max-w-6xl mx-auto flex justify-center gap-6'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/convert" className='hover:underline'>Converter</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/convert' element={<CryptoConverter/>}/>
      </Routes>
    </Router>
  )
}

export default App
