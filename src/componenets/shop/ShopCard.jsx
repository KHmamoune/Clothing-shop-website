import './ShopCard.css'

const ShopCard = ({ name, price, image}) => {
    return (
        <div className="shop-card">
            <img src={`/images/${image}`} />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ShopCard
