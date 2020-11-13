import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage';
import Shoppage from "./components/Shop/Shoppage";
import LoginComponent from './components/LoginPage/LoginPage';
import Productpage from "./components/Productpage/Productpage";
const ProductDetails = (props) => {
    console.log(props);
    return (<div>
        <h1> ProductDetails : {props.match.params.product}</h1>
    </div>
    );
}

function App() {
    return (<div className="App" >
        <Header></Header>
        <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/home" component={Homepage} />
            <Route path='/login' component={LoginComponent} />
            <Route path="/shop" component={Shoppage} />
            <Route path="/hats" component={Productpage} />
            <Route path="/sneakers" component={Productpage} />
            <Route path="/mens" component={Productpage} />
            <Route path="/womens" component={Productpage} />
            <Route path="/jackets" component={Productpage} />

            <Route path="/shop/:product" component={ProductDetails} />
        </Switch>
    </div>
    );
}

export default App;