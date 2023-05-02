import './App.css';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "http://localhost:4000/"

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={URL} />} />
        <Route path='/about' element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;