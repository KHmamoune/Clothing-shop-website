import { Link } from 'react-router-dom'
import logoIcon from "../../assets/logoIcon.svg"
import searchIcon from "../../assets/searchIcon.svg"
import bagIcon from "../../assets/bagIcon.svg"
import bookIcon from "../../assets/bookmarkIcon.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={logoIcon} />
                <Link to="/">Acceuil</Link>
                <Link to="/shop">Boutique</Link>
                <Link to="">Nouveautes</Link>
                <Link to="">Contact</Link>
            </div>
            <div className="header-right">
                <div>
                    <img src={searchIcon} />
                    <Link to="">Rechercher</Link>
                </div>
                <div>
                    <img src={bagIcon} />
                    <Link to="">Panier</Link>
                </div>
                <div>
                    <img src={bookIcon} />
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
