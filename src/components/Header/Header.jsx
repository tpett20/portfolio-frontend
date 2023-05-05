import { Link } from "react-router-dom"
import './Header.css'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 mb-2 rounded">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    💻 Thomas Pettersen
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/' className="nav-link">
                            🏠 Home
                        </Link>
                        <Link to='/about' className="nav-link">
                            📗 About
                        </Link>
                        <Link to='/projects' className="nav-link">
                            🏗️ Projects
                        </Link>
                        <Link to='/projects' className="nav-link">
                            📄 Resume
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header