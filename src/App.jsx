import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import CaseStudie from './pages/case-studie'

function App() {
  return (
    <Router>
      <div className="app">

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/case-study/:projectName" element={<CaseStudie />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
