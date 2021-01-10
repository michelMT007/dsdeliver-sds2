import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import {useEffect, useState} from 'react';
import { OrderLocationdata, Product } from "./types";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";


function Orders(){
    const [products, setProducts]=useState<Product[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [orderLocation, setOrderLocation]= useState<OrderLocationdata>();

    useEffect(()=> {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [] );

    return(
        <>
            <div className="orders-container">
                <StepsHeader></StepsHeader>
                <ProductsList products={products} />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary></OrderSummary>
            </div>
            <Footer></Footer>
        </>
        

    )
}


export default Orders;