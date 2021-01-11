import React, { useEffect } from "react";
import {useState} from "react";


function Counter(){

    const [counter, setCounter] = useState(0);

   const handleIncrease = () => {
       console.log('inccrementar---------------');
       setCounter(counter + 1);
   }

   const handleDecrease = () => {
        console.log('Decrementar-------------------')
        setCounter(counter - 1);
    }

    return (

        <div>
            <button onClick={handleIncrease}> Incrementar</button>
            <button onClick={handleDecrease}> Decrementar</button>
        
    <h1>Valor Contador: {counter}</h1>
        </div>
    )
}



export default Counter;