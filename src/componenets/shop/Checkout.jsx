import { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [phoneNumber, setPhoneNumber] = useState('+213');
  const [deliveryOption, setDeliveryOption] = useState('home');
  const [wilaya, setWilaya] = useState('Jijel');
  const [commune, setCommune] = useState('Jijel');

  // Product information
  const productPrice = 3500;
  const deliveryPrice = 1000;
  const totalPrice = productPrice + deliveryPrice;

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
            <div className="plus-button">
              <p>+</p>
            </div>
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
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
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
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Livraison</label>
          <div className="delivery-options">
            <div className="delivery-option">
              <input type="radio" id="homeDelivery" name="deliveryOption" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="delivery-radio" />
              <label htmlFor="homeDelivery">Livraison à domicile</label>
            </div>
            <div className="delivery-option">
              <input type="radio" id="pickupDelivery" name="deliveryOption" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="delivery-radio" />
              <label htmlFor="pickupDelivery">Livraison en point relais (stop desk)</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Votre adresse</label>
          <input type="text" className="form-input" />
        </div>
      </div>

      <div className="summary-section">
        <div className="product-image-container">
          <div className="product-image">
            <img src="/api/placeholder/120/150" alt="Green hoodie" />
          </div>
        </div>

        <div className="product-detail">
          <div className="detail-label">Quantité</div>
          <div className="detail-value">1</div>
        </div>

        <div className="product-detail">
          <div className="detail-label">Prix</div>
          <div className="price-value">{productPrice}DA</div>
        </div>

        <div className="price-section">
          <div className="detail-label">Prix de livraison</div>
          <div className="price-box">
            {deliveryPrice}DA
          </div>
        </div>

        <div className="price-section">
          <div className="detail-label">Prix total</div>
          <div className="price-box">
            {totalPrice}DA
          </div>
        </div>

        <button className="calculate-button">
          Calculer
        </button>

        <button className="order-button">
          Envoyer ma commande
        </button>
      </div>
    </div>
  );
}

export default Checkout
