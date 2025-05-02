import { useNavigate } from "react-router"
import promotionImage from "../../assets/promotionImage.png"
import "./Promotion.css"

const Promotion = () => {
    const Navigate = useNavigate()

    return (
        <div className="promotion-container">
            <img src={promotionImage} alt="promotion image" className="promotion-image" />
            <div className="promotion-text-container">
                <p>Profitez de nos réductions incroyables, des offres limitées vous attendent !</p>
                <p>Ne ratez pas nos réductions incroyables, des offres exclusives et limitées vous attendent maintenant</p>
                <p>Jusqu'à</p>
                <p>50%</p>
                <button onClick={() => Navigate("/shop", {state: {filter: 'sale', type: 'tous'}})}>Voir plus</button>
            </div>
        </div>
    )
}

export default Promotion
