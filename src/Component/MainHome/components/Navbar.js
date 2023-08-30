import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="navbar-linkone">
                <Link to="/" className="div-navbar">Helping Hand</Link>
            </div>
            <div className="navelements">
            <div className="navbar-link">
                <Link to="/" className="div-navbar">Home</Link>
            </div>
            <div className="navbar-link">
                <Link to="/privacy" className="div-navbar">How It Works</Link>
            </div>
           
            <div className="navbar-link">
                <Link to="/login" className="div-navbar">Gallery</Link>
            </div>
            <div className="navbar-link">
                <Link to="/login" className="div-navbar">Blog</Link>
            </div>
            <div className="navbar-link">
                <Link to="/login" className="div-navbar">About</Link>
            </div>
            <div className="navbar-link">
                <Link to="/login" className="div-navbar">Contact</Link>
            </div>
            <div className="navbar-link">
                <button to="/demo" className="btn-navbar">Donate</button>
            </div>
            </div>
        </div>
    )
}
export default Navbar