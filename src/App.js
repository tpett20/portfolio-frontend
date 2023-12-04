import './App.css';
// Components
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Teaching from './pages/Teaching/Teaching';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teaching' element={<Teaching />} />
      </Routes>
    </div>
  )
}

export default App;