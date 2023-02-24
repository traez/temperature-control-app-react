import React, { useState, useEffect } from 'react';

function NumberDiv() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    if (number === 0) {
      setColor('blue');
    } else if (number > 0) {
      setColor('green');
    } else if (number < 0) {
      setColor('red');
    }
  }, [number]);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div style={{ color }}>
      <span>{number}</span>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
}

export default NumberDiv;
