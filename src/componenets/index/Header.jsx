import { Link } from 'react-router-dom'
import logoIcon from "../../assets/logoIcon.svg"
import searchIcon from "../../assets/searchIcon.svg"
import bagIcon from "../../assets/bagIcon.svg"
import bookIcon from "../../assets/bookmarkIcon.svg"
import "./Header.css"
import { useContext } from 'react'
import { MyContext } from '../../MyContext'
import Cookies from 'js-cookie'

const Header = () => {
    const { isAuthenticated } = useContext(MyContext)

    const handleLogout = () => {
        Cookies.remove("authToken")
        window.location.reload()
    }

    return (
        <div className="header-container">
            <div className="header-left">
                <img src={logoIcon} />
                <Link to="/">Acceuil</Link>
                <Link to="/shop/tous">Boutique</Link>
                <Link to="/shop/new">Nouveautes</Link>
                <Link to="">Contact</Link>
            </div>
            <div className="header-right">
                <div>
                    <img src={searchIcon} />
                    <Link to="">Rechercher</Link>
                </div>
                <div>
                    <img src={bagIcon} />
                    <Link to="/cart">Panier</Link>
                </div>
                <div>
                    <img src={bookIcon} />
                    {isAuthenticated ? <button className='logout-button' onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
                </div>
            </div>
        </div>
    )
}

export default Header
