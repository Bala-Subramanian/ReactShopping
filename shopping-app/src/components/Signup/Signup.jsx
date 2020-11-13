import React, { Component } from 'react'
import "./Signup.scss"
export class SigninComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        console.log("handlesubmit");
        e.preventDefault();
        const { email, password, confirmPassword } = this.state;
        if (email === "") {
            alert("Email can not be empty");
        }
        if (password !== confirmPassword) {
            alert("Password does not match")
        }
    }

    render() {
        const { email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <form>
                    <div className="signup_div">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" value={email} onChange={this.handleChange} placeholder="Enter Email" name="email" required></input>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" value={password} onChange={this.handleChange} placeholder="Enter Password" name="psw" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" value={confirmPassword} onChange={this.handleChange} placeholder="Repeat Password" name="psw-repeat" required />

                        <label>
                            <input type="checkbox" name="remember" className="remember" />
                                Remember me
                                </label>

                        <p>By creating an account you agree to our <a href="https://www.w3schools.com/howto/howto_css_signup_form.asp">Terms & Privacy</a>.</p>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn" onClick={this.handleSubmit}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SigninComponent