import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screnns/CartScreen';
import HomeScreen from './screnns/HomeScreen';
import ProductScreen from './screnns/ProductScreen';

function App() {
  return (
      <BrowserRouter>
            <div className="grid-container">

            <header className="row">
                <div>
                    <a className="brand" href="/"> amazona</a>
                </div>

                <div>
                    <a href="/card"> Cart</a>
                    <a href="/signin"> Sign In</a>
                </div>
            </header>

            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact ></Route> 
            </main>

            <footer className="row center">
                All right reserved 
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
