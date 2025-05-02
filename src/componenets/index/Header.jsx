import { Link, useNavigate } from 'react-router-dom'
import logoIcon from "../../assets/logoIcon.svg"
import bagIcon from "../../assets/bagIcon.svg"
import loginIcon from "../../assets/loginIcon.svg"
import "./Header.css"
import { useContext } from 'react'
import { MyContext } from '../../MyContext'
import Cookies from 'js-cookie'

const Header = () => {
    const Navigate = useNavigate()
    const { isAuthenticated, contextInfo } = useContext(MyContext)

    const handleLogout = () => {
        Cookies.remove("authToken")
        window.location.reload()
    }

    return (
        <div className="header-container">
            <div className="header-left">
                <img src={logoIcon} />
                <Link to="/">Acceuil</Link>
                <Link to="/shop" state={{filter: 'tous', type: 'tous'}}>Boutique</Link>
                <Link to="/shop" state={{filter: 'new', type: 'tous'}}>Nouveautes</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="header-right">
                <div>
                    <img src={bagIcon} />
                    <Link to="/shop-cart">Panier</Link>
                </div>
                <div>
                    {isAuthenticated ?
                        <div className='dropdown'>
                            <img src={loginIcon} />
                            <div className='dropdown-content'>
                                <button onClick={() => Navigate("/profile")}>profile</button>
                                {contextInfo.user_type === 'admin' ? <button onClick={() => Navigate("/admin")}>dashboard</button> : null}
                                <button onClick={() => handleLogout()}>logout</button>
                            </div>
                            <p>{contextInfo.username}</p>
                        </div> :
                        <div className='dropdown'>
                            <img src={loginIcon} />
                            <Link to="/login">Login</Link>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Header
