import React, {useState} from 'react';
import PaperIcon from '../assets/paper_icon.png';
import ClockIcon from '../assets/clock_icon.png';

const PriceComponent = () => {
  const [rangeValue, setRangeValue] = useState(180);
  const handleChange = e => setRangeValue(e.target.value);
  const [isButtonSelected, setIsButtonSelected] = useState({
      fixedSelected: false,
      hourlySelected: true
  });

  const selectedStyle = {
      border: '2px solid rgb(54, 100, 237)',
      backgroundColor: 'rgba(54, 100, 237, .1)'
  }

    return (
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
            <button onClick={() => setIsButtonSelected({ fixedSelected: false, hourlySelected: true })} 
                    style={isButtonSelected.hourlySelected ? selectedStyle : {}} 
                    className="price__hourly-button">
                <img src={ClockIcon} alt="JPG"/> <div>Hourly</div> 
            </button>
            <button onClick={() => setIsButtonSelected({ fixedSelected: true, hourlySelected: false })} 
                    style={isButtonSelected.fixedSelected ? selectedStyle : {}} 
                    className="price__fixed-button">
                <img src={PaperIcon} alt="JPG"/> <div>Fixed</div> 
            </button>
        </div>
        <div className="price__hourly-payment-slider-container">
            <div className="price__hourly-payment">
               <div id="symbol">$</div>
                <div className="range-value">{rangeValue} </div> 
                <div id="per-hour"> / hour</div>
            </div>
            <input 
                onChange={handleChange} 
                value={rangeValue} 
                type="range" 
                min="20" 
                max="300" 
                step="1"
                className="price__hourly-payment-slider"
            />
            <div className="price__min-max-display">
             <div className="min">$20</div>
             <div className="max">$300</div>
            </div>
        </div>
    </div>
    )
};

export default PriceComponent;