import { useState } from 'react'
import './App.css'
import Pet from './components/Pet'
import SearchParams from './components/SearchParams'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Adopt Me !</h1>
      <SearchParams />
    </div>
  )
}

export default App
