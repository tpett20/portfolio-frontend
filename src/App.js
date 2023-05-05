import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  const URL = "https://thomas-pettersen-portfolio.herokuapp.com"

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={`${URL}/projects`} />} />
        <Route path='/about' element={<About URL={`${URL}/about`} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;