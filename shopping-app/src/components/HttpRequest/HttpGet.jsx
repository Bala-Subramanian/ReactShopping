import React, { Component } from 'react';
import axios from 'axios';
class HttpGetComponent extends Component {
    constructor() {
        super();
        this.state = {
            posts : []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
    }
    render() {
        return (
            <div>HTTPGET</div>
        )
    }
}
export default HttpGetComponent;