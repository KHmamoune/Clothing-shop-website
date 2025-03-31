import { useState } from 'react'
import NavBar from './NavBar.jsx'
import { useEffect } from 'react'
import CardContainer from './CardContainer.jsx'

const Shop =  () => {
    let [clothesType, setClothesType] = useState('tous')
    let [clothesInfo, setClothesInfo] = useState([])

    useEffect(() => {
        (async () => {
            let url = "http://127.0.0.1:8000/product/"
            const data = await fetch(url, {
                method: "GET",
                mode: "cors"
            })

            const res = await data.json()
            console.log(res)
            setClothesInfo(res)
        })()
    }, [clothesType])

    return (
        <div>
            <p>Decouvrir tous les produits</p>
            <NavBar setClothesType={setClothesType} />
            <CardContainer clothesInfo={clothesInfo} />
        </div>
    )
}

export default Shop
