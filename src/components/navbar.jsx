import '../styles/navbar.css'
import { Link } from "react-router-dom";
import CodeForgeLogo from '../assets/codeforge.png'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarLogo">
                    <img src={CodeForgeLogo} alt="CodeForgeLogo" id='CodeForgeLogo' />
            </div>
            <div className="NavbarButtons">
                <Link to="/" id='NavbarSingleBtn'>Accueil</Link>
                <Link to="/Projects" id='NavbarSingleBtn'>Projets</Link>
                <Link to="/MeetUs" id='NavbarSingleBtn'>Prendre RDV</Link>
                <Link to="/ContactUs" id='NavbarSingleBtn'>Nous contacter</Link>
            </div>
        </div>
    )
}

export default Navbar;