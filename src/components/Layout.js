import React from "react";
import './styles/Layout.css';
import './styles/mediaLayout.css';
import Navbar from "./Layout/Navbar";

export default class Layout extends React.Component {
    render(){
        return <div className='layout'>
            <Navbar /> 
        </div>
    }
}