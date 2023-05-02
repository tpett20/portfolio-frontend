import { Link } from "react-router-dom"
import './Header.css'

function Header(props) {
    return (
        <header>
            <h1>Tom's Portfolio</h1>
            <nav className="Navbar">
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <Link to='/about'>
                    <div>About</div>
                </Link>
                <Link to='/projects'>
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header