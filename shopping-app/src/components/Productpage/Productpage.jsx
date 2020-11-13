import React, { Component } from 'react';
import SHOP_DATA from '../Shop/Shop.data';
import "./Productpage.scss";

export default class Productpage extends Component {
    constructor(props) {
        super(props);
        const pageTitle = props.location.state.detail.section.title;
        var tempmaindatalist = null;
        for (var i = 0; i < SHOP_DATA.length; i++) {
            if ((SHOP_DATA[i].title).toLocaleLowerCase() === pageTitle) {
                // this.setState({ maindatalist: totalList[i].items })
                tempmaindatalist = SHOP_DATA[i].items
            }
        }
        this.state = {
            pageTitle: props.location.state.detail.section.title,
            collections: SHOP_DATA,
            maindatalist: tempmaindatalist
        }

    }
    componentDidMount() {
        const totalList = (this.state.collections);
        console.log(totalList);
        // var tempmaindatalist = null;
        // for (var i = 0; i < totalList.length; i++) {
        //     if ((totalList[i].title).toLocaleLowerCase() === this.state.pageTitle) {
        //         // this.setState({ maindatalist: totalList[i].items })
        //         tempmaindatalist = totalList[i].items
        //     }
        // }
        // console.log(tempmaindatalist);
        // fetch(tempmaindatalist)
        //     .then(response => response.json())
        //     .then(
        //         (result) =>
        //             this.setState(
        //                 { maindatalist: result }
        //             )
        //     );
        // var dummyJSON = "https://jsonplaceholder.typicode.com/users";
    //     fetch(dummyJSON)//insert the URL from where we need to obtain the response
    //       .then(response => response.json()) //the obtained values will be stored as response
    //       .then(backendDetails => this.setState({ monsters: backendDetails })) // assign the stored response and to the required variable
    //   }
        //console.log(this.state.maindatalist);
        // this.setState({ maindatalist: tempmaindatalist })

    }

    render() {
        const maindata = this.state.maindatalist;
        // function onAddCart(data) {
        //     console.log(data);
        // }
        //console.log(maindata);
        return (
            <div className="products-main-div">
                <h2>PRODUCT PAGE</h2>
                <div>
                    <h1 className="title">ABC {maindata.toUpperCase()}</h1>
                    {/* <div>
                        <h1 className="title">{maindata.toUpperCase()}</h1>
                        <div className="preview">{maindata.items.map(
                            (data) => {
                                return <div className='card' key={data.id} data={data}>
                                    <img src={data.imageUrl} alt="images" className="cardimg"/>
                                    <span className="collection-name">{data.name}</span>
                                    <span className="collection-price">${data.price}</span>
                                    <div>
                                        <button
                                            className="onAddCartCls"
                                            onClick={ () => onAddCart(maindata)}>ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            }
                        )} </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
