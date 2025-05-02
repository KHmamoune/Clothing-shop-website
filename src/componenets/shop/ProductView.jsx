import { useState } from 'react'
import { useEffect } from 'react'
import './ProductView.css'
import { useLocation, useNavigate, useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { MyContext } from '../../MyContext'

const ProductView = () => {
    const Navigate = useNavigate()
    let { isAuthenticated, shopCartItems, setShopCartItems } = useContext(MyContext)
    let { id } = useParams()
    let [product, setProduct] = useState('tous')
    let [sizes, setSizes] = useState([])
    let [colorsBySize, setColosBySize] = useState({})
    let [promotion, setPromotion] = useState(null)
    let [displayedColors, setDisplayedColors] = useState("")
    let [selectedColor, setSelectedColor] = useState("")
    let [quantity, setQuantity] = useState(1)
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
                let i = 0

                for (let size in res) {
                    if (i === 0) {
                        setDisplayedColors(res[size].size)
                        i = 1
                    }

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
                setPromotion(res2[0].sale)
            }
        })()
    }, [id])

    const handleAddToCart = () => {
        let new_product = {...product}

        if (promotion !== null) {
            new_product.price = product.price - (product.price * promotion) / 100
        }

        let item = {
            product: new_product,
            quantity: quantity,
            color: selectedColor,
            size: displayedColors
        }

        let temp = [...shopCartItems]
        temp.push(item)
        alert("product added to cart")
        setShopCartItems(temp)
    }

    return (
        <div className='product-container'>
            <p>Personalizer votre achat</p>
            <div>
                <div>
                    <img src={`/images/${product.image}`} />
                </div>
                <div className='product-customization-container'>
                    <div className='product-info-container'>
                        <p>{product.name}</p>
                        <p>{product.product_type}</p>
                        { promotion === null ? <p>{product.price}DA</p> : <p><del>{product.price}DA</del> {product.price - (product.price * promotion) / 100}DA</p>}
                        <p>prix</p>
                    </div>
                    <div className='rule'></div>
                    <p>Taille</p>
                    <div className='size-container'>
                        {sizes.map((item) => {
                            let sizeAdded = size.includes(item.size)
                            size.push(item.size)
                            return sizeAdded ? null : <button key={uuidv4()} className={displayedColors === item.size ? 'selected-size-button' : 'size-button'} onClick={() => {setDisplayedColors(item.size); setSelectedColor("")}}>{item.size}</button>
                        })}
                    </div>
                    <p>Couleur</p>
                    <div className='color-container'>
                        {displayedColors != "" ? colorsBySize[displayedColors].map((item) => {
                            return (
                                <button key={uuidv4()} className={selectedColor === item ? 'selected-color-button' : 'color-button'} style={{backgroundColor: item}} onClick={() => setSelectedColor(item)}></button>
                            )
                        }) : null}
                    </div>
                    <p>Quantite</p>
                    <div className='quantity-container'>
                        <button onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
                        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                        <button onClick={() => setQuantity(quantity => quantity - 1)} disabled={quantity == 1}>-</button>
                    </div>
                        {
                            isAuthenticated ?
                            <div className='buy-buttons-container'>
                                <button onClick={handleAddToCart} disabled={selectedColor === ""} >Ajouter au panier</button>
                                <button onClick={() => Navigate("/checkout", { state: [{ product: product, quantity: quantity, color: selectedColor, size: displayedColors, sale: promotion }]})} disabled={selectedColor === ""} >Continue l'achat</button>
                            </div> :
                            <div className='buy-buttons-container'>
                                <button onClick={() => Navigate("/login")}>Login pour fair un achat</button>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default ProductView
