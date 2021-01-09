import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



function OrderLocation() {

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue, obrigado!<br/>
                </h3>

                <div className="filter-container">

                </div>
                <MapContainer center={ [-15.362, -12.005]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-15.362, -12.005]}>
                            <Popup>
                                Minha localização. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation; 