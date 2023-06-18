import React, { useState } from 'react';
import axios from 'axios';
import './SpinWheel.css';

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult('');

    // Fetch random joke from the API
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        const joke = response.data;
        setResult(`${joke.setup} ${joke.punchline}`);
        setIsSpinning(false);
      })
      .catch(error => {
        console.error(error);
        setResult('Failed to fetch joke');
        setIsSpinning(false);
      });
  };

  return (
    <div className="spin-wheel-container">
      <div className={`spin-wheel ${isSpinning ? 'spin' : ''}`}>
        <div className="spin-button" onClick={spinWheel}>
          {isSpinning ? 'Spinning...' : 'Spin'}
        </div>
      </div>
      {result && <p className="result-text">{result}</p>}
    </div>
  );
};

export default SpinWheel;
