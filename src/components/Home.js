import React from "react";
import './styles/Home.css';
import './styles/mediaHome.css';

export default class Home extends React.Component {
    render(){
        return <div className='home'>
            <div className='words'>
                <h1 className='Header'>Fesshr </h1>

                <p className='about'>
                    Fesshr is an app designed to fetch some Images  through Calls to some RESTful APIs from the 
                    Internet.
                </p>

                <p className='guide'>
                    This was built using React, ContextAPI, Unsplash Image Api, and Firebase. Lets go on a tour...
                </p>

            </div>
            
            {/* <div className='screen'>
                <img src='./img/download2.png' className='image' width='98%' height='97%' />
                <div className='fill hide'>
                    <i className="fab fa-youtube youtb"></i>
                </div>
            </div> */}


        </div>
    }
}

