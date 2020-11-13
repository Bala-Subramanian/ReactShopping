import React from 'react';
import "./Collectionpreview.scss";
const Collectionpreview = (props) => {
    const onAddCart = (data) => {
        console.log("onAddCart clicked. key: " + JSON.stringify(data));
    }
    const maindata = props.data;
    return (
        <div>
            <div>
                <div>
                    <h1 className="title">{(maindata.title).toUpperCase()}</h1>
                    <div className="preview">{maindata.items.map(
                        (data) => {
                            return <div className='collection-footer' key={data.id} data={data}>
                                <img src={data.imageUrl} alt="images" />
                                <span className="collection-name">{data.name}</span>
                                <span className="collection-price">${data.price}</span>
                                <div>
                                    <button
                                        className="onAddCartCls"
                                        onClick={ () => onAddCart(maindata)}>ADD TO CART
                                    </button>
                                </div>
                            </div>;
                        }
                    )} </div>
                </div>
            </div>
        </div>
    )
}

export default Collectionpreview