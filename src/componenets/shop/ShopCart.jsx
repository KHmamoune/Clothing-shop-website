import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { MyContext } from '../../MyContext'
import removeIcon from './../../assets/Cancel.svg'
import './ShopCart.css'

const ShopCart = () => {
    let { shopCartItems, setShopCartItems } = useContext(MyContext)
    let tPrice = 0
    let tCount = 0
    console.log(shopCartItems)

    const removeItem = (index) => {
        let temp = [...shopCartItems]
        temp = temp.filter((_, ind) => index !== ind)
        setShopCartItems(temp)
    }

    if (shopCartItems.length === 0) {
        return (
            <div className='shop-cart-container'>
                <div>
                    <p>Personalizer votre achat</p>
                </div>
                <div className='empty-text'>Aucun element trouver dans le panier</div>
            </div>
        )
    }

    return (
        <div className='shop-cart-container'>
            <div>
                <p>Personalizer votre achat</p>
            </div>

            <div className='shop-cart-info'>
                <p>#</p>
                <p>Prix</p>
                <p>Personalizer</p>
                <p>Quantite</p>
                <p>Prix Total</p>
                <div></div>
            </div>

            {shopCartItems.map((item, index) => {
                tPrice += item.quantity * item.product.price
                tCount += item.quantity
                return (
                    <div key={uuidv4()} className='cart-item'>
                        <div className='cart-item-image'>
                            <img src={`/images/${item.product.image}`} />
                        </div>
                        <p>{item.product.price}DA</p>
                        <div className='personalize-container'>
                            <p>Taille:</p>
                            <p>{item.size}</p>
                            <p>Couleur:</p>
                            <div style={{backgroundColor: item.color}}></div>
                        </div>
                        <p>{item.quantity}</p>
                        <p>{item.quantity * item.product.price}DA</p>
                        <div>
                            <img src={removeIcon} onClick={() => removeItem(index)} />
                        </div>
                    </div>
                )
            })}

            <div className='total-info-container'>
                <div>
                    <p>Nombre total de produits</p>
                    <p>{tCount}</p>
                </div>
                <div>
                    <p>Prix total de produits</p>
                    <p>{tPrice}DA</p>
                </div>
            </div>

            <button>Continue l'achat</button>
            }
        </div>
    )
}

export default ShopCart
