import React from 'react'
import "./Menuitem.scss";
import { useHistory } from 'react-router-dom';
const Menuitem = (props) => {
    const history = useHistory();

    const handleClick = (propssection) => {
        history.push({
            pathname: '/' + propssection.section.title,
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