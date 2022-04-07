import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app';
import {ProductProvider} from './Context';



const appRoot = document.getElementById('app');

ReactDOM.render(
    <ProductProvider> 
        <Router>
            <App/>
        </Router>
    </ProductProvider>,
    appRoot);