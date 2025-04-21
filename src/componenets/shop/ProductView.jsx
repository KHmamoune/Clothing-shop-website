import { useState } from 'react'
import { useEffect } from 'react'
import './ProductView.css'
import { useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

const ProductView = () => {
    let { id } = useParams()
    let [product, setProduct] = useState('tous')
    let [sizes, setSizes] = useState([])
    let [colorsBySize, setColosBySize] = useState({})
    let [promotion, setPromotion] = useState(null)
    let [displayedColors, setDisplayedColors] = useState("")
    let [quantity, setQuantity] = useState(0)
    let size = []

    useEffect(() => {
        (async () => {
            let url = `http://127.0.0.1:8000/api/size/${id}`
            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            if (data.ok) {
                const res = await data.json()
                if (res.length === 0) {
                    return
                }

                console.log(res)
                setSizes(res)
                setProduct(res[0].product)

                let dict = {}

                for (let size in res) {
                    dict[res[size].size] == undefined ? dict[res[size].size] = [res[size].color] : dict[res[size].size].push(res[size].color)
                }

                setColosBySize(dict)
            }

            url = `http://127.0.0.1:8000/api/promotion/${id}`
            const data2 = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            if (data2.ok) {
                const res2 = await data2.json()
                console.log(res2)
                setPromotion(res2)
            }
        })()
    }, [id])

    return (
        <div className='product-container'>
            <p>Personalizer votre achat</p>
            <div>
                <img src={`/images/${product.image}`} />
                <div>
                    <p>{product.name}</p>
                    <p>{product.product_type}</p>
                    <p>{product.price}</p>
                    <p>prix</p>
                    <p>taille</p>
                    <div>
                        {sizes.map((item) => {
                            let sizeAdded = size.includes(item.size)
                            size.push(item.size)
                            return sizeAdded ? null : <button key={uuidv4()} className='size-button' onClick={() => setDisplayedColors(item.size)}>{item.size}</button>
                        })}
                    </div>
                    <div>
                        {displayedColors != "" ? colorsBySize[displayedColors].map((item) => {
                            return (
                                <button key={uuidv4()} className='color-button' style={{backgroundColor: item}} onClick={() => console.log(item)}></button>
                            )
                        }) : null}
                    </div>
                    <div>
                        <button onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
                        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                        <button onClick={() => setQuantity(quantity => quantity - 1)}>-</button>
                    </div>
                    <button>Ajouter au panier</button>
                    <button>Continue l'achat</button>
                </div>
            </div>
        </div>
    )
}

export default ProductView
