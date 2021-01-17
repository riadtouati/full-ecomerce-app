import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethode } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodeScreen(props) {

    const cart = useSelector((state) => state.cart)
    const shippingAddress = cart;

    if(shippingAddress.address !== null) {
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethode] =  useState('PayPal');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethode(paymentMethod));
        
        props.history.push('/placehorder');
    };




    return (

        <div>
            <CheckoutSteps step1 step2 step3> </CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>

                <div>
                    <h1> Payment Method </h1>
                </div>

                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="paypal" 
                            value="PayPal" 
                            name="paymentMethod" 
                            required checked onChange={(e) => setPaymentMethode(e.target.value)}
                        ></input>
                        <label htmlFor="paypal"> PayPal</label>
                    </div>
                </div>

                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="stripe" 
                            value="Stripe" 
                            name="paymentMethod" 
                            required  onChange={(e) => setPaymentMethode(e.target.value)}
                        ></input>
                        <label htmlFor="stripe"> Stripe</label>
                    </div>
                </div>

                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>


            </form>
        </div>
    )
}
