import React from 'react';

const CheckoutComponent = () => (
    <div className="checkout">
        <div className="checkout__primary-title">Upgrade your plan</div>
        <span className="checkout__secondary-paragraph">
         Please make sure the payment to start enjoying all the features
         of our premium plan as soon as possible.
        </span>
        <div className="checkout__small-business-selection-container">
          <div className="checkout__small-business-selection">
              <img className="checkout__small-business-selection-icon" />
              <div className="checkout__small-business-selection-primary-title">
               Small Business
              </div>
              <div className="checkout__small-business-selection-primary-sub-title">
                Change Plan
              </div>
          </div>
          <div className="checkout__small-business-selection-price">
            <div className="checkout__small-business-selection-price">$8,350</div>
            <div className="checkout__small-business-selection-price-year">/year</div>
          </div>
        </div>
        <div className="checkout__payment-details">
          <div className="checkout__payment-details-title">Payment Details</div>
            <div className="checkout__credit-card-payment-details--1">
              <div className="checkout__credit-card-details">
                <img className="checkout__credit-card-details-logo--1" />
                <div className="checkout__credit-card-details-title">Credit Card</div>
                <div className="checkout__credit-card-details-number">
                  2344 xxxx xxxx 8880
                </div>
              </div>
              <input type="text" placeholder="CVC" />
            </div>
            <div className="checkout__credit-card-payment-details--2">
              <div className="checkout__credit-card-details">
                <img className="checkout__credit-card-details-logo--2" />
                <div className="checkout__credit-card-details-title">Credit Card</div>
                <div className="checkout__credit-card-details-number">
                  8890 xxxx xxxx 1234
                </div>
              </div>
              <input placeholder="CVC" type="text" />
            </div>
            <div className="checkout__add-payment-method-container">
              <div className="checkout__add-payment-method-container-title">ADD PAYMENT METHOD</div>
              <input placeholder="Email address" type="text"/>
              <button className="checkout__proceed-to-payment-button">
               <div>Proceed to payment</div>  
              </button>
            </div>
        </div>
    </div>
);

export default CheckoutComponent;