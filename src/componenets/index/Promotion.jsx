import promotionImage from "../../assets/promotionImage.png"
import "./Promotion.css"

const Promotion = () => {
    return (
        <div className="promotion-container">
            <img src={promotionImage} alt="promotion image" className="promotion-image" />
            <div className="promotion-text-container">
                <p>Profitez de nos réductions incroyables, des offres limitées vous attendent !</p>
                <p>Ne ratez pas nos réductions incroyables, des offres exclusives et limitées vous attendent maintenant</p>
                <p>Jusqu'à</p>
                <p>50%</p>
                <button>Voir plus</button>
            </div>
        </div>
    )
}

export default Promotion
