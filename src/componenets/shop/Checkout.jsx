import { useContext, useState } from 'react';
import './Checkout.css';
import { useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import downArrow from '../../assets/arrow_down.svg'
import { MyContext } from '../../MyContext'

const Checkout = () => {
    const { state } = useLocation()
    const { shopCartItems, setShopCartItems } = useContext(MyContext)
    const [phoneNumber, setPhoneNumber] = useState('+213');
    const [cardNumber, setCardNumber] = useState('');
    const [cardKey, setCardKey] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('home');
    const [paymentOption, setPaymentOption] = useState('onPickup');
    const [wilaya, setWilaya] = useState('Jijel');
    const [commune, setCommune] = useState('Jijel');
    const [adress, setAdress] = useState('');
    const [totalPrice, setTotalPrice] = useState(0)
    const [deliveryPrice, setDeliveryPrice] = useState(1000)
    const [ordered, setOrdered] = useState(false)
    console.log(deliveryOption)

    const handleCalculate = () => {
        let total = 0

        if (deliveryOption === "home") {
            setDeliveryPrice(1000)
        } else {
            setDeliveryPrice(0)
        }

        for (let item in state) {
            total += state[item].product.price * state[item].quantity + deliveryPrice
        }

        return total
    }

    const handleCommand = () => {
        if (phoneNumber === '' || phoneNumber === '+213' || adress === '' || (paymentOption === 'byCard' && (cardNumber === '' || cardKey === ''))) {
            return
        }

        setShopCartItems([])
        console.log({phoneNumber: phoneNumber, adress: adress, paymentOption: paymentOption, commune: commune, wilaya: wilaya, cardNumber: cardNumber, cardKey: cardKey})
        setOrdered(true)
    }

    if (ordered) {
        return (
            <p className='order-text'>merci, votre commande est passer</p>
        )
    }

    return (
        <div className="checkout-container">
            <div className="form-section">
                <h2 className="form-title">Personnaliser votre achat</h2>

                <div className="form-group">
                    <label className="form-label">Votre nom et prénom</label>
                    <input type="text" className="form-input" />
                </div>

                <div className="form-group">
                    <label className="form-label">Votre Numero de telephone</label>
                    <div className="phone-input-container">
                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-input" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="location-container">
                        <div className="location-field">
                            <label className="form-label">Wilaya</label>
                            <div className="select-container">
                                <select value={wilaya} onChange={(e) => setWilaya(e.target.value)} className="form-select" >
                                    <option value="Jijel">Jijel</option>
                                    <option value="Alger">Alger</option>
                                    <option value="Oran">Oran</option>
                                </select>
                                <div className="select-arrow">
                                    <img src={downArrow} />
                                </div>
                            </div>
                        </div>

                        <div className="location-field">
                            <label className="form-label">Commune</label>
                            <div className="select-container">
                                <select value={commune} onChange={(e) => setCommune(e.target.value)} className="form-select" >
                                    <option value="Jijel">Jijel</option>
                                    <option value="El Milia">El Milia</option>
                                    <option value="Taher">Taher</option>
                                </select>
                                <div className="select-arrow">
                                    <img src={downArrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Livraison</label>
                  <div className="delivery-options">
                    <div className="delivery-option">
                      <input type="radio" id="homeDelivery" name="deliveryOption" checked={deliveryOption === 'home'} onChange={() => {setDeliveryOption('home'); setDeliveryPrice(1000)}} className="delivery-radio" />
                      <label htmlFor="homeDelivery">Livraison à domicile</label>
                    </div>
                    <div className="delivery-option">
                      <input type="radio" id="pickupDelivery" name="deliveryOption" checked={deliveryOption === 'pickup'} onChange={() => {setDeliveryOption('pickup'); setDeliveryPrice(0)}} className="delivery-radio" />
                      <label htmlFor="pickupDelivery">Livraison en point relais (stop desk)</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Payment</label>
                    <div className="delivery-options">
                      <div className="delivery-option">
                        <input type="radio" id="payment1" name="paymentOption" checked={paymentOption === 'onPickup'} onChange={() => {setPaymentOption('onPickup')}} className="delivery-radio" />
                        <label htmlFor="payment1">Payment on recieve</label>
                      </div>
                      <div className="delivery-option">
                        <input type="radio" id="payment2" name="paymentOption" checked={paymentOption === 'byCard'} onChange={() => {setPaymentOption('byCard')}} className="delivery-radio" />
                        <label htmlFor="payment2">Payment par card</label>
                      </div>
                    </div>
                    { paymentOption === 'byCard' ? <div className='payment-form'>
                      <div>
                          <label className="form-label">Numero de carte</label>
                          <input type="text" className="payment-input card-number" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
                      </div>
                      <div>
                          <label className="form-label">Cle</label>
                          <input type="text" className="payment-input" value={cardKey} onChange={(event) => setCardKey(event.target.value)}  />
                      </div>
                    </div> : null }
                </div>

                <div className="form-group">
                  <label className="form-label">Votre adresse</label>
                  <input type="text" className="form-input" value={adress} onChange={(event) => {setAdress(event.target.value)}} />
                </div>
            </div>

            <div className="summary-section">
                <div className="product-image-container">
                    {state.map((item) => {
                        return(
                            <div key={uuidv4()}>
                                <div>
                                    <img src={"/images/" + item.product.image} />
                                </div>
                                <div>
                                    <p>quantity</p>
                                    <p className='quantity-text'>{item.quantity}</p>
                                </div>
                                <div>
                                    <p>prix</p>
                                    <p className='price-text'>{item.product.price}DA</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="price-section">
                  <div className="detail-label">Prix de livraison</div>
                  <div className="price-box"> {deliveryPrice}DA </div>
                </div>

                <div className="price-section">
                  <div className="detail-label">Prix total</div>
                  <div className="price-box"> {totalPrice}DA </div>
                </div>

                <button className="calculate-button" onClick={() => setTotalPrice(handleCalculate())}> Calculer </button>

                <button className="order-button" onClick={handleCommand}> Envoyer ma commande </button>
            </div>
        </div>
    );
}

export default Checkout
