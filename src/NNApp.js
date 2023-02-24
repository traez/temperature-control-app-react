import React from "react"
import { useState, useEffect } from 'react';

export default function NNApp() {
    
  const [number, setNumber] = useState(0);
  
  const [color, setColor] = useState('');

  useEffect(() => {
    if (number === 0) {
      setColor('neutral');
    } else if (number > 0) {
      setColor('hot');
    } else if (number < 0) {
      setColor('cold');
    }
  }, [number]);

      const handleMinus = () => {
        setNumber(prevNumber =>  prevNumber - 1)
      }

      const handleAdd = () => {
        setNumber(prevNumber =>  prevNumber + 1)
      }
 

    return (
        <>
        <main>
          <section 
            className={color}
          >{number}° C</section>
          <aside>
            <article onClick={handleMinus}>-</article>
            <article onClick={handleAdd}>+</article>
          </aside>
        </main>
        <footer><a href="https://github.com/traez/temperature-control-app-react" target="_blank">https://github.com/traez</a></footer>
        </>
    )
}

 /**
<section 
          style={{
        backgroundColor: color
      }}
      >{number}° C</section>
     */