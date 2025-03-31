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
                <a href="">Acceuil</a>
                <a href="">Boutique</a>
                <a href="">Nouveautes</a>
                <a href="">Contact</a>
            </div>
            <div className="header-right">
                <div>
                    <img src={searchIcon} />
                    <a href="">Rechercher</a>
                </div>
                <div>
                    <img src={bagIcon} />
                    <a href="">Panier</a>
                </div>
                <div>
                    <img src={bookIcon} />
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header
