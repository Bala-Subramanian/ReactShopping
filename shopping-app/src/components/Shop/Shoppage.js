import React, {Component} from 'react';
import Collectionpreview from '../Collectionpreview/Collectionpreview';
import SHOP_DATA from './Shop.data';
import './Shop.scss';

export class Shoppage extends Component{
    constructor(props){
        super(props);
        this.state={
            collections : SHOP_DATA
        };
    }
    render() {
        return (
            <div className="shoppage-menu">
                {this.state.collections.map(
                    data => (
                        <Collectionpreview key={data.id} data={data}></Collectionpreview>
                    )
                )}
            </div>
        )
    }
}

export default Shoppage
