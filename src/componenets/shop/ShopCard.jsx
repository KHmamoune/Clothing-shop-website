const ShopCard = ({ name, price, image}) => {
    return (
        <div>
            <img src={image} />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ShopCard
