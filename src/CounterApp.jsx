import { useState } from 'react';
import './App.css'

export const CounterApp = () => {

    const [count, setCount] = useState(0);

  return (
    <>
        <div className="counter-display">{count}</div>
        <button
            className="counter-button"
            onClick={ () => setCount( count => count + 1 ) }
        >
            +1
        </button>

        <button
            className="counter-button reset"
            onClick={ () => setCount(0) }
        >
            Reset
        </button>
        
        <button
            className="counter-button"
            onClick={ () => {
                ( count > 0 ) && setCount( count => count - 1 )
            } }
        >
            -1
        </button>
    </>
  )
}
