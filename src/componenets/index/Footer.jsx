import logoIcon from "../../assets/logoIcon.svg"
import logoFB from "../../assets/Facebook.svg"
import logoIN from "../../assets/Instagram.svg"
import backgroundImage from "../../assets/footer_background_image.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="inscri-container">
                <p>Inscrivez-Vous</p>
                <p>Inscrivez-vous avec votre email pour recevoir nos futures promotions exclusives.</p>
                <img src={backgroundImage} />
                <div className="input-container">
                    <input placeholder="Votre email" />
                    <button>Envoyer</button>
                </div>
            </div>
            <div className="info-container">
                <img src={logoIcon} />
                <p>Boutique CozyFit</p>
                <div>
                    <img src={logoFB} />
                    <img src={logoIN} />
                </div>
                <div className="links-container">
                    <a>Terms and conditions</a>
                    <a>Privacy policy</a>
                    <a>FAQ</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
