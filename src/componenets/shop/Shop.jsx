import { useState } from 'react'
import NavBar from './NavBar.jsx'
import { useEffect } from 'react'
import CardContainer from './CardContainer.jsx'
import './Shop.css'
import { useParams } from 'react-router'

const Shop =  () => {
    let { fill } = useParams()
    let [clothesType, setClothesType] = useState("tous")
    let [clothesInfo, setClothesInfo] = useState([])
    let [filter, setFilter] = useState(fill)

    useEffect(() => {
        (async () => {
            if (filter === "tous") {
                let url = `http://127.0.0.1:8000/api/product/${clothesType}`
                const data = await fetch(url, {
                    method: "GET",
                    mode: "cors",
                })

                const res = await data.json()
                console.log(res)
                setClothesInfo(res)

            } else if (filter === "sale") {
                let url = `http://127.0.0.1:8000/api/promotion`
                const data = await fetch(url, {
                    method: "GET",
                    mode: "cors",
                })

                const res = await data.json()
                console.log(res)

                let products = []

                for (let promotion in res) {
                    if (res[promotion].product.product_type === clothesType || clothesType === "tous") {
                        products.push(res[promotion].product)
                    }
                }

                setClothesInfo(products)
            } else if (filter === "new") {
                let url = `http://127.0.0.1:8000/api/product/${clothesType}`
                const data = await fetch(url, {
                    method: "GET",
                    mode: "cors",
                })

                const res = await data.json()
                console.log(res)

                let products = []
                let today = new Date()

                for (let prod in res) {
                    let prodDate = new Date(res[prod].date_of_addition)
                    console.log((today - prodDate) / (1000 * 3600 * 24))
                    if ((today - prodDate) / (1000 * 3600 * 24) < 2) {
                        products.push(res[prod])
                    }
                }

                setClothesInfo(products)
            }


        })()
    }, [clothesType, filter])

    return (
        <div className='shop-container'>
            <p>Decouvrir tous les produits</p>
            <NavBar setClothesType={setClothesType} clothesType={clothesType} setFilter={setFilter} filter={filter} />
            <CardContainer clothesInfo={clothesInfo} filter={filter} />
        </div>
    )
}

export default Shop
