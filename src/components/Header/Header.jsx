import { Link } from "react-router-dom"
import './Header.css'

function Header(props) {
    function downloadResume() {
        fetch('Thomas-Pettersen-Resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Thomas-Pettersen-Resume.pdf'
                alink.click()
            })
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 mb-3 rounded shadow-sm">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    💻 Thomas Pettersen
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className="nav-link">
                            🏠 Home
                        </Link>
                        <Link to='/about' className="nav-link">
                            👨‍💻 About
                        </Link>
                        <Link to='/projects' className="nav-link">
                            🏗️ Projects
                        </Link>
                        <li onClick={downloadResume} className="resume-link nav-link">
                            📄 Resume
                        </li>
                        <Link to='/contact' className="nav-link">
                            📬 Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header