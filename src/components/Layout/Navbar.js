import React from "react";
import {Link} from 'react-router-dom';

import { ProductConsumer } from "../../Context";

export default class Navbar extends React.Component {

    style1={
        color: 'inherit', 
        textDecoration: 'inherit'
    }

   
    render(){
        return (
            <ProductConsumer>
                {value=>{
                    const {handleStyle, navToggle} =value;

                    return <div id='nav'>
                        <div className='logo'>
                            <Link to ='/' style={this.style1}>
                                    <div className='normL'>
                                        <h1 className='name'>F</h1>
                                        <h3>Fesshr</h3>
                                    </div>
                                    
                                    <div className='medLogo'>
                                        <h1 className='name'>F<span className='lspan'>esshr</span></h1>
                                        
                                    </div>
                            </Link>               
                        </div>
            
                        <nav>
                            <Link to ='/'>
                                <button data-id="0" className='hover med mediaNav clickeD' onClick={(e)=>{handleStyle(e); navToggle(e)}}>
                                    <i className='fas fa-home icon' /> 
                                    <br />Home
                                </button> 
                            </Link>
                            
                            <Link to ='/search'>
                                <button data-id="1" className='med mediaNav ' onClick={(e)=>{handleStyle(e); navToggle(e)}}>
                                    <i className='fas fa-search icon' /> 
                                    <br />Search
                                </button>
                            </Link>
                            
                            <Link to ='/board'>
                                <button data-id="2" className='med mediaNav ' onClick={(e)=>{handleStyle(e); navToggle(e)}}>
                                    <i className='fas fa-columns icon' /> 
                                    <br />Gallery
                                </button>
                            </Link>
                            
                            <Link to ='/comment'>
                                <button data-id="3" className='med mediaNav ' onClick={(e)=>{handleStyle(e); navToggle(e)}}>
                                    <i className='far fa-address-book icon' /> 
                                    <br />Comment
                                </button>
                            </Link>
            
                            <Link to ='/about'>
                                <button data-id="4" className='med mediaNav ' onClick={(e)=>{handleStyle(e); navToggle(e)}}>
                                    <i className='far fa-address-card icon' /> 
                                    <br />About
                                </button>
                            </Link>
                        </nav>     
                    </div>
                }}
            </ProductConsumer>
        )

    }
}

