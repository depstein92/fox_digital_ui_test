import React from 'react';

const PriceComponent = () => (
    <div className="price">
        <div className="price__set-up-your-pricing-container">
            <div className="price__set-up-your-pricing-title">
            Set up your pricing
            </div>
            <div className="price__set-up-your-pricing-sub-title">
             Please set up your hourly or fixed rates so that the 
             client is aware of your pricing
            </div>
        </div>
        <div className="price__button-container">
            <button className="price__hourly-button">
                <img src="" alt="JPG"/> <div>Hourly</div> 
            </button>
            <button className="price__fixed-button">
                <img src="" alt="JPG"/> <div>Fixed</div> 
            </button>
        </div>
        <div className="price__hourly-payment-slider-container">
            <div className="hourly-payment"></div>
            <div className="hourly-slider"></div>
        </div>
    </div>
);

export default PriceComponent;