import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showCard2, setShowCard2] = useState(false);

  const handleButtonClick = () => {
    if (selectedValue !== null) {
      setShowCard2(true);
    } else {
      alert('Please select a rating.');
    }
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <div className={`card ${showCard2 ? 'hidden' : ''}`} id="card1">
        <div className="star-background"></div>
        <div className="star-background">
          <div className="star"></div>
          <div className="star-dots"></div>
        </div>
        <div className="stara">
          <img src="/star.svg" alt="star" />
        </div>
        <h2 id="h1">How did we do?</h2>
        <form id="buttonForm">
          <p id="p1">
            Please let us know how we did with your support <br />
            request. All feedback is appreciated to help us <br />
            improve our offering!
          </p>
          <label className="radio-label">
            <input
              type="radio"
              name="button"
              value="1"
              onChange={handleRadioChange}
            />
            <span className="radio-circle">1</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="button"
              value="2"
              onChange={handleRadioChange}
            />
            <span className="radio-circle">2</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="button"
              value="3"
              onChange={handleRadioChange}
            />
            <span className="radio-circle">3</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="button"
              value="4"
              onChange={handleRadioChange}
            />
            <span className="radio-circle">4</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="button"
              value="5"
              onChange={handleRadioChange}
            />
            <span className="radio-circle">5</span>
          </label>
          <br />
          <button type="button" onClick={handleButtonClick}>
            SUBMIT
          </button>
        </form>
      </div>

      <div className={`card ${showCard2 ? '' : 'hidden'}`} id="card2">
        <img src="/illustration-thank-you.svg" alt="thank-you" />
        <p id="selectedButton">You selected: {selectedValue} out of 5</p>
        <h2 id="hdos">Thank you!</h2>
        <p id="p2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default App;
