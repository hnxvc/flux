import React from 'react';
import AppActions from '../actions/app-actions';

class AddToCart extends React.Component{
    handleClick(){
        AppActions.addItem(this.props.item);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>Add To Cart</button>
        )
    }
}

export default AddToCart;