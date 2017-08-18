import React from 'react';
import AppStore from '../stores/app-stores';
import RemoveFromCart from './remove-from-cart';
import Increase from './increase';
import Decrease from './decrease';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = this.getCartItems();
    }

    getCartItems(){
        return {
            items: AppStore.getCart()
        }
    }

    componentDidMount(){
        AppStore.addChangeListener(this._onChange);
    }

    _onChange(){
        this.setState(this.getCartItems())
    }

    render(){
        let total = 0;
        let items = this.state.items.map((item, i) => {
            let subtotal = item.qty * item.cost;
            total += subtotal;
            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i}/></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Increase index={i} />
                        <Decrease index={i} />
                    </td>
                    <td>${subtotal}</td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default Cart;