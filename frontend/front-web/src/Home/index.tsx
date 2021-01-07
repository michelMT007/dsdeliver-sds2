import React from 'react';
import './style.css';
import {ReactComponent as MainImage}  from './main.svg';

function Home() {

    return(

        <div className="home-container">

            <div className= "home-content">

                <div className= "home-actions">
                    <h1 className = "home-title"> 
                        Faça seu pedido <br></br>que entregameos<br></br> pra voçê!
                    </h1>
                    <h3 className ="home-subtitle">
                        Escolha o seu pedido e em poucos minutos <br></br>
                        levaremos a sua porta
                    </h3>
                    <a href="ORDERS  " className="home-btn-order">
                        FAZER PEDIDO
                    </a>
                </div>

                <div className ="home-image">
                    <MainImage></MainImage>
                </div>

        </div>

        </div>
    )
}

export default Home;
