import './ShopCard.css'
import { useNavigate } from 'react-router'

const ShopCard = ({ name, price, image, id, promotion}) => {
    const Navigate = useNavigate()
    if (promotion !== undefined) {
        console.log(promotion)
    }

    return (
        <div className="shop-card" onClick={() => Navigate(`/shop/product/${id}`)}>
            {promotion === undefined ? null : <p className='sale-label'>-{promotion.sale}%</p>}
            <div className='shop-card-image'>
                <img src={`/images/${image}`} />
            </div>
            <div className='shop-card-info-container'>
                <div>
                    <p>{name}</p>
                    <p className='grey-text'>prix</p>
                    {promotion === undefined ? <p>{price}DA</p> : <p><del>{price}DA</del> {price - (price * promotion.sale) / 100}DA</p>}
                </div>
            </div>
        </div>
    )
}

export default ShopCard
