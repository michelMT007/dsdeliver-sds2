import React, { useEffect } from "react";

type Props = {

    message: string;
}
 function Hello(){

    useEffect(() => {
        // chamada para uma API para buscar 
    }, []);

    return (
        <div>
            <h1>Componente Hello!</h1>
        </div>
    )
}
export default Hello;