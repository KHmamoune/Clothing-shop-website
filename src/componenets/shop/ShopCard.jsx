import './ShopCard.css'
import buyIcon from '../../assets/buy.svg'
import { useNavigate } from 'react-router'

const ShopCard = ({ name, price, image, id}) => {
    const Navigate = useNavigate()
    return (
        <div className="shop-card" onClick={() => Navigate(`./product/${id}`)}>
            <img src={`/images/${image}`} />
            <div>
                <div>
                    <p>{name}</p>
                    <p className='grey-text'>prix</p>
                    <p>{price}DA</p>
                </div>
                <img src={buyIcon} />
            </div>
        </div>
    )
}

export default ShopCard
