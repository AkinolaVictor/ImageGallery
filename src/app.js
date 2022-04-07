import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
//import './app.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Comment from "./components/comment/comments";
import Search from "./components/Search";
import Login from "./components/board/Login";
import Auth from "./components/board/Auth";
import About from "./components/About";

export default class App extends React.Component {
    render(){
        return (
            // <React.Fragment>
                <div className='grid'>
                    <Layout />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/search' component={Search} />
                        <Route path='/board' component={Auth} />
                        <Route path='/comment' component={Comment} />
                        <Route path='/about' component={About} />
                        <Route component={Login} />
                    </Switch>
                </div>
                
            // </React.Fragment>
        );
    }
}

