import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import NumberLiteralType from 'typescript';

import { fetchLocalMapBox } from '../api';
import React, { useState } from 'react';

const initialPosition = {
    lat: -18.9110558,
    lng: -48.26201
}

type Place = {
    label?: string;
    value?: string;

    position: {
        lat: number;
        lng: number;
    }
}

function OrderLocation() {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
                place: item.place_name,
            });
        });

        callback(places);
    };

     const handleChangeSelect = (place: Place) => {
        setAddress(place);
        /*onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });*/
    }; 
    
    

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue, obrigado!<br />
                </h3>

                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um endereço para entrega"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}></AsyncSelect>

                </div>

                <MapContainer center={address.position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            Meu local <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default OrderLocation; 