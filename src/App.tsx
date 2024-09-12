import HomePage from "./components/HomePage/HomePage"
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <Router>
      <div className='mx-auto max-w-[1200px]'>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  )
};

export default App;
