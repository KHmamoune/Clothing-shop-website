import "./NouveautesCard.css"

const NouveautesCard = ({image, name, price}) => {
    return (
        <div className="nouveautes-card-container">
            <div>
                <img src={`./images/${image}`} />
            </div>
            <div className="nouveautes-card-info-container">
                <p>{name}</p>
                <p>prix</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default NouveautesCard
