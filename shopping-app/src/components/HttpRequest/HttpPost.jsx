import React, { Component } from 'react'
import axios from 'axios';
class HttpPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            password: "",
            body: ""
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandler = (e) => {
        console.log(this.state);
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const value = this.state;
        e.preventDefault(); // to avoid page refresh
        axios.post(url,value)
            .then(response => {console.log(response)} )
            .catch(error => {console.log(error)})

    }
    render() {
        const {userId, password, body} = this.state;
        return (
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            placeholder = "text"
                            onChange={this.onChangeHandler}>
                            </input>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder = "password"
                            onChange={this.onChangeHandler}>
                            </input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            placeholder = "body"
                            onChange={this.onChangeHandler}>
                            </input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpPost
