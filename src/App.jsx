import { useState } from 'react'
import './App.css'
import Pet from './components/Pet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Adopt Me !</h1>
      <Pet name='Luna' animal='dog' breed='don' />
      <Pet name='Sufi' animal='cat' breed='haha' />
      <Pet name='Luna' animal='dog' breed='don' />
    </div>
  )
}

export default App
