import { v4 as uuidv4 } from 'uuid'
import ShopCard from './ShopCard'
import './CardContainer.css'

const CardContainer = ({ clothesInfo, filter }) => {
    return (
        <div className='shop-card-container'>
            {clothesInfo.map((item) => {
                return (
                    <ShopCard key={uuidv4()} name={item.name} price={item.price} image={item.image} id={item.id} />
                )
            })}
        </div>
    )
}

export default CardContainer
