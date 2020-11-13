import React, { Component } from 'react';
import './Signin.scss';
import { Link, useHistory } from 'react-router-dom';

class SigninComponent extends Component {
    onSignIn = () => {
        useHistory().push('home');
    }
    render() {
        return (
            <div>
                <form action="post">
                    <div className="signin_div">
                        <h1>Login</h1>
                        <label htmlFor="signin_username">Username</label>
                        <input type="text" name="signin_username" id="signin_username_id" placeholder="Enter Email"/>
                        <label htmlFor="signin_password">Password</label>
                        <input type="password" name="signin_password" id="signin_password_id" placeholder="Enter Password"/>
                        <Link className="option" to="/home">
                            <button>Sign In</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default SigninComponent;