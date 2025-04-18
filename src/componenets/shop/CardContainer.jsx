import { v4 as uuidv4 } from 'uuid'
import ShopCard from './ShopCard'
import './CardContainer.css'

const CardContainer = ({ clothesInfo }) => {
    return (
        <div className='shop-card-container'>
            {clothesInfo.map((item) => {
                return (
                    <ShopCard key={uuidv4()} name={item.name} price={item.price} image={item.image} />
                )
            })}
        </div>
    )
}

export default CardContainer
