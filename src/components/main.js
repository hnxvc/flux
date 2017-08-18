import React from 'react';
import Catalog from './catalog';
import Cart from './cart';

class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>Shopping Items</h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart />
            </div>
        )
    }
}

export default Main;