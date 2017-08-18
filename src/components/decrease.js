import React from 'react';
import AppActions from '../actions/app-actions';

class Decrease extends React.Component{
    handleClick(){
        AppActions.decreaseItem(this.props.index);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>-</button>
        )
    }
}

export default Decrease;