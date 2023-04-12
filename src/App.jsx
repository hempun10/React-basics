import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import Details from './components/Details'
import SearchParams from './components/SearchParams'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      scaleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header>
            <Link to='/' > Adopt Me </Link>
          </header>

          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
