import React from 'react'
import "./Header.scss";
import Logo from "E:/GitClone/ReactShopping/shopping-app/src/resources/shopping-cart-icon.jpg";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="headerCls">
            <h1>Shopping app</h1>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/home">CONTACT</Link>
                <Link className="option" to="/login">SIGN IN</Link>
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Header;
