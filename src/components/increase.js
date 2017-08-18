import React from 'react';
import AppActions from '../actions/app-actions';

class Increase extends React.Component{
    handleClick(){
        AppActions.increaseItem(this.props.index);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>+</button>
        )
    }
}

export default Increase;