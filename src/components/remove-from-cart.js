import React from 'react';
import AppActions from '../actions/app-actions';

class RemoveFromCart extends React.Component{
    handleClick(){
        AppActions.removeItem(this.props.index);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>x</button>
        )
    }
}

export default RemoveFromCart;