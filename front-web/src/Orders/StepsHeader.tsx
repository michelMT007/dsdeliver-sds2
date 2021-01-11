import './style.css';

function StepsHeader(){

    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">Siga <br/> as etapas</h1>

                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        Selecione os produtos e localização.
                    </li>

                    <li>
                        <span className="steps-number">2</span>
                        Depois clique em <strong>"ENVIAR PEDIDOS"</strong>
                    </li>

                </ul>
            </div>

        </header>
    )
}

export default StepsHeader;