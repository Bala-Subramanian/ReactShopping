import React, { Component } from 'react';
import './LoginPage.scss';
import SignupComponent from '../Signup/Signup';
import SigninComponent from '../Signin/Signin';

class LoginComponent extends Component {
    render() {
        return (
            <div className="logincomponent">
                <div className="signup"><SignupComponent></SignupComponent></div>
                <div className="signin"><SigninComponent></SigninComponent></div>
            </div>
        )
    }
}
export default LoginComponent