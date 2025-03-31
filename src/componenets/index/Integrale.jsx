import image1 from "../../assets/IntegralImage1.png"
import image2 from "../../assets/IntegralImage2.png"
import image3 from "../../assets/IntegralImage3.png"
import image4 from "../../assets/IntegralImage4.png"
import image5 from "../../assets/IntegralImage5.png"
import "./Integrale.css"

const Integrale = () => {
    return (
        <div>
            <div className="integrale-text-container">
                <p>Mode Integrale</p>
                <p>Chaussures, hoodies, t-shirts et plus, tout ici !</p>
            </div>
            <div className="images-grid">
                <div className="item1">
                    <p>T-shirt</p>
                    <img src={image1} />
                </div>
                <div className="item2">
                    <p>Tous voir</p>
                    <img src={image2} />
                </div>
                <div className="item3">
                    <p>Jooking</p>
                    <img src={image3} />
                </div>
                <div className="item4">
                    <p>Chaussures</p>
                    <img src={image4} />
                </div>
                <div className="item5">
                    <p>Jacket</p>
                    <img src={image5} />
                </div>
            </div>
        </div>
    )
}

export default Integrale
