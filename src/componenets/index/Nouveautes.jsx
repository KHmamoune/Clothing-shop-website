import { useState, useRef, useEffect } from 'react'
import image1 from "../../assets/nouveautesImage1.png"
import arrowRight from "../../assets/arrow_right.png"
import arrowLeft from "../../assets/arrow_left.png"
import NouveautesCard from "./NouveautesCard.jsx"
import { v4 as uuidv4 } from 'uuid'
import "./Nouveautes.css"

const Nouveautes = () => {
    const sliderRef = useRef(null)
    const scrollAmount = 300
    const [images, setImages] = useState([])
    let [clothesInfo, setClothesInfo] = useState([])
    let [promotionsList, setPromotionsList] = useState([])

    useEffect(() => {
        (async () => {
            let url2 = `http://127.0.0.1:8000/api/promotion`
            const data2 = await fetch(url2, {
                method: "GET",
                mode: "cors",
            })

            const res2 = await data2.json()
            console.log(res2)

            let promotions = []

            for (let promotion in res2) {
                promotions.push({ id: res2[promotion].product.id, sale: res2[promotion].sale })
            }

            setPromotionsList(promotions)

            let url = `http://127.0.0.1:8000/api/product/tous`
            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            const res = await data.json()
            console.log(res)

            setClothesInfo(res)
        })()
    }, [])



    return (
        <div>
            <div className="nouveautes-text-container">
                <p>Nouveautes</p>
                <p>Découvrez les dernières tendances maintenant !</p>
            </div>
            <div className="nouveautes-container">
                <button className="nav-btn" onClick={() => { const container = sliderRef.current; container.scrollLeft -= scrollAmount}}><img src={arrowLeft} /></button>

                <div className="images-container" ref={sliderRef}>
                    {clothesInfo.map((item) => {
                        return (
                            <NouveautesCard key={uuidv4()} image={item.image} name={item.name} price={item.price} />
                        );
                    })}
                </div>

                <button className="nav-btn" onClick={() => { const container = sliderRef.current; container.scrollLeft += scrollAmount}}><img src={arrowRight} /></button>
            </div>
        </div>
    )
}

export default Nouveautes
