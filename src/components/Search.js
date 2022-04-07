import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './styles/Search.css';
import './styles/mediaSearch.css';
import { ProductConsumer } from "../Context";
import Detail from './search-detail';
import Images from './search/images';
import Books from './search/books';
import Videos from './search/videos';
import EachImage from "./search/EachImage";
import Preview from "./search/preview";

export default class Search extends React.Component {
    render(){
        return (
            <ProductConsumer>
                {value=>{
                    const {handleStyle, GetKey, Auth, savefail} =value;
                    return (        
                        <div className='search-container'>
                            <div className='search-control hide'>
                                <Link to ='/search/images'><button data-id='5' className='search-button ' onClick={handleStyle}>Images</button></Link>
                                <Link to ='/search/books'><button data-id='6' className='search-button hide' onClick={handleStyle}>Books</button></Link>
                                <Link to ='/search/videos'><button data-id='7'className='search-button hide' onClick={handleStyle}>Videos</button></Link> 
                            </div>

                            <div className=' screen search-screen form'>
                                <form action="/search">
                                    <input type="text" id="searchs" name="fname" className='texts' placeholder="Enter Your Keyword" style={{fontSize: '12px'}}/>
                                    <button data-id='5' className='search-button' onClick={GetKey}>search</button>
                                </form>
                            </div>

                            <div className='cart-detail'>
                                <button data-id='8'className='search-button cart hide' onClick={handleStyle}>
                                <i className="fas fa-shopping-cart"></i> &nbsp;
                                    Cart
                                </button>

                                <div className='screen edit hide'>
                                    <Detail />
                                </div>
                            </div>

                            <div className='content'>
                                {/* <EachImage /> */}
                                {/* <Preview /> */}
                                <Images />
                                {/* <Switch>
                                    <Route path='/search/images' component={Images} />
                                    <Route path='/search/books' component={Books} />
                                    <Route path='/search/videos' component={Videos} />
                                </Switch> */}
                            </div>

                        </div>
                    );
                }}
            </ProductConsumer>
        )

    }
}

