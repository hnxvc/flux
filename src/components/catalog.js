import React from 'react';
import AppStore from '../stores/app-stores';
import AddToCart from './add-to-cart';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getCatelog();
    }

    getCatelog() {
        return {
            items: AppStore.getCatelog()
        }
    }

    render(){
        let items = this.state.items.map((item, index)=>{
            return(
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>${item.cost}</td>
                    <td><AddToCart item={item}/></td>
                </tr>
            );
        });
        return(
            <table className="table table-hover">
                {items}
            </table>
        )
    }
}

export default Catalog;