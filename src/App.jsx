import './App.css'
import Details from './components/Details'
import SearchParams from './components/SearchParams'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to='/' > Adopt Me </Link>
        </header>

        <Routes>
          <Route path='/details/:id' element={<Details />} />
          <Route path='/' element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
