import { useState, useRef } from 'react'
import image1 from "../../assets/nouveautesImage1.png"
import arrowRight from "../../assets/arrow_right.png"
import arrowLeft from "../../assets/arrow_left.png"
import NouveautesCard from "./NouveautesCard.jsx"
import { v4 as uuidv4 } from 'uuid'
import "./Nouveautes.css"

const Nouveautes = () => {
    const sliderRef = useRef(null)
    const scrollAmount = 300
    const [images, setImages] = useState([
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
        {image: image1, name: "T-shirt Oversize", price: "2900"},
    ])

    return (
        <div>
            <div className="nouveautes-text-container">
                <p>Nouveautes</p>
                <p>Découvrez les dernières tendances maintenant !</p>
            </div>
            <div className="nouveautes-container">
                <button className="nav-btn" onClick={() => { const container = sliderRef.current; container.scrollLeft -= scrollAmount}}><img src={arrowLeft} /></button>

                <div className="images-container" ref={sliderRef}>
                    {images.map(({image, name, price}) => {
                        return (
                            <NouveautesCard key={uuidv4()} image={image} name={name} price={price} />
                        );
                    })}
                </div>

                <button className="nav-btn" onClick={() => { const container = sliderRef.current; container.scrollLeft += scrollAmount}}><img src={arrowRight} /></button>
            </div>
        </div>
    )
}

export default Nouveautes
