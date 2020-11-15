import React from 'react'
import "./Menuitem.scss";
import { useHistory } from 'react-router-dom';
import SHOP_DATA from './Shop/Shop.data';
const Menuitem = (props) => {
    const history = useHistory();

    const handleClick = (propssection) => {
        console.log(propssection);
        var pageTitle = propssection.section.title;

        var tempmaindatalist = null;
        for (var i = 0; i < SHOP_DATA.length; i++) {
            if ((SHOP_DATA[i].title).toLocaleLowerCase() === pageTitle) {
                // this.setState({ maindatalist: totalList[i].items })
                tempmaindatalist = SHOP_DATA[i].items
            }
        }
        history.push({
            pathname: '/' + pageTitle,
            state: { detail: propssection }
        })

    }

    return (
        <div className="menu-item">
            <img src={props.section.imageUrl} alt="newimage" />
            <div className="content">
                <div onClick={() => handleClick(props)}>
                    <h1 className="title">{(props.section.title).toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )

}
export default (Menuitem)