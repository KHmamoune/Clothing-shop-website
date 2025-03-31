import "./NouveautesCard.css"

const NouveautesCard = ({image, name, price}) => {
    return (
        <div className="nouveautes-card-container">
            <img src={image} />
            <div>
                <p>{name}</p>
                <p>price</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default NouveautesCard
