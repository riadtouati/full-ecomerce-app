import React, { useEffect } from 'react';
import Product from '../components/Product.js';
import LoaddingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions.js';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList );
    const { loading, error, products } = productList;
    
    useEffect(() => {
       dispatch(listProducts());
  }, []);


    return (
        <div>
        {loading ? ( 
            <LoaddingBox> </LoaddingBox>
        ) : error ? (
            <MessageBox variant="danger" >{error}</MessageBox>
        ) : ( 
            <div>
                <div className="row center">
                    {products.map(product => (
                        <Product key={product._id} product={product}></Product>  
                    ))}
                </div>
            </div>
        )}
         
        </div>
    );
}