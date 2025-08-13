import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="app">

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
