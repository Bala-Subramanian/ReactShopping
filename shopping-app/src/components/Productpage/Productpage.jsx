import React, { Component } from 'react';
import SHOP_DATA from '../Shop/Shop.data';
import "./Productpage.scss";

export default class Productpage extends Component {
    constructor(props) {
        super(props);
        const pageTitle = props.location.state.detail.section.title;
        this.state = {
            pageTitle: pageTitle,
            collections: SHOP_DATA,
            maindatalist: []
        }
    }
    componentDidMount() {
        var totalList = null;
        totalList = (this.state.collections);
        var tempmaindatalist = null;
        for (var i = 0; i < SHOP_DATA.length; i++) {
            if ((SHOP_DATA[i].title).toLocaleLowerCase() === this.state.pageTitle) {
                tempmaindatalist = SHOP_DATA[i].items
            }
            this.setState({ maindatalist: tempmaindatalist})
        }
    }
    render() {
        var maindata = null;
        maindata = this.state.maindatalist;
        console.log(maindata);
        function onAddCart(data) {
            console.log(data);
        }
        return (
            <div className="products-main-div">
                <h2>{(this.state.pageTitle).toUpperCase()} PAGE</h2>
                <div>
                    <div>
                        <div className="preview">{maindata.map(
                            (data) => {
                                return <div className='card' key={data.id} data={data}>
                                    <img src={data.imageUrl} alt="images" className="cardimg" />
                                    <span className="collection-name">{data.name}</span>
                                    <span className="collection-price">${data.price}</span>
                                    <div>
                                        <button
                                            className="onAddCartCls"
                                            onClick={() => onAddCart(maindata)}>ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            }
                        )} </div>
                    </div>
                </div>
            </div>
        )
    }
}