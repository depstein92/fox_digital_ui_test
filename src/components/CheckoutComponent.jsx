import React from 'react';
import SmallBusinessIcon from '../assets/business_selection_icon.png';
import VisaLogo from '../assets/visa_credit_card_logo.png';
import AmericanExpressLogo from '../assets/american_express.png';
import ArrowIcon from '../assets/arrow.jpg';

const CheckoutComponent = () => (
    <div className="checkout">
       <div className="checkout__description-container">
          <div className="checkout__primary-title">Upgrade your plan</div>
          <span className="checkout__secondary-paragraph">
          Please make sure the payment to start enjoying all the features
          of our premium plan as soon as possible.
          </span>
        </div>
        <div className="checkout__small-business-selection-container">
          <div className="checkout__small-business-selection">
              <img src={SmallBusinessIcon} className="checkout__small-business-selection-icon" alt="JPG" />
              <div className="checkout__small-business-selection-description-container">
                  <div className="checkout__small-business-selection-primary-title">
                  Small Business
                  </div>
                  <div className="checkout__small-business-selection-primary-sub-title">
                  CHANGE PLAN
                  </div>
              </div>
          </div>
          <div className="checkout__small-business-selection-price-container">
            <div className="checkout__small-business-selection-money-symbol">$</div>
            <div className="checkout__small-business-selection-price">8,350</div>
            <div className="checkout__small-business-selection-price-year">/year</div>
          </div>
        </div>

        <div className="checkout__payment-details">
          <div className="checkout__payment-details-title">Payment details</div>
            <div className="checkout__credit-card-payment-details--1">
              <div className="checkout__credit-card-payment-details__details">
                <img src={VisaLogo} className="checkout__credit-card-payment-details__logo" alt="JPG" />
                <div className="checkout__credit-card-payment-details__title-number">
                  <h1>Credit card</h1>
                  <div className="checkout__credit-card-payment-details__number">
                    2344 xxxx xxxx 8880
                  </div> 
                </div>
              </div>
              <input type="text" placeholder="CVC" />
            </div>

            <div className="checkout__credit-card-payment-details--2">
              <div className="checkout__credit-card-payment-details__details">
                <img src={AmericanExpressLogo} alt="JPG" className="checkout__credit-card-payment-details__logo" />
                <div className="checkout__credit-card-payment-details__title-number">
                  <h1>Credit card</h1>
                  <div className="checkout__credit-card-payment-details__number">
                      8890 xxxx xxxx 1234
                  </div> 
                </div>
              </div>
              <input placeholder="CVC" type="text" />
            </div>
            <div className="checkout__add-payment-method-container">
              <div className="checkout__add-payment-method-container-title">ADD PAYMENT METHOD</div>
              <input className="checkout__email-address-input" placeholder="Email address" type="text"/>
              <button className="checkout__proceed-to-payment-button">
               <div>Proceed to payment</div> <img src={ArrowIcon} alt=""/>  
              </button>
            </div>
        </div>
    </div>
);

export default CheckoutComponent;