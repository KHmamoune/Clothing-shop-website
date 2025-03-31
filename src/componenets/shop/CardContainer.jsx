import { v4 as uuidv4 } from 'uuid'
import ShopCard from './ShopCard'

const CardContainer = ({ clothesInfo }) => {
    return (
        clothesInfo.map((item) => {
            return (
                <ShopCard key={uuidv4()} name={item.name} price={item.price} image={item.image} />
            )
        })
    )
}

export default CardContainer
