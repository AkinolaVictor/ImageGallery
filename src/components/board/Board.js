import React from "react";
import '../styles/mediaBoard.css';
import ImageReciever from './ImageReciever';
import BookReciever from './BookReciever';
import { ProductConsumer } from "../../Context";

export default class Board extends React.Component {
    constructor (props){
        super(props)
        this.state={
            Email: '',
            Password: ''
        }

    }


    
    a=true
    
    render(){
        return (
        <ProductConsumer>
            {value=>{
                const {logout, savedBooks, savedImages, chooseBoard} =value;
        
        return <div>
            <div className='boardw'>
                <h2 className='heda'>My Gallery</h2>
                <button data-id='7'className='search-button logout' onClick={logout}>Logout</button> 
                
                {savedImages.length==0 && savedBooks.length==0?
                <h2>You have no saved files in your Gallery<br /></h2>:
                <div>
                    {savedImages.length==0?
                    <h2>You have no saved Images in your Gallery</h2>:
                    <div className='boardI'>
                        <div>
                            <button className='resiz' id='unsplash'>Here are your Saved Images</button>
                            <ImageReciever />
                            <br />
                            <br />
                        </div>
                    </div>
                    }
                       
                    
                </div>}
                
            </div>
           
            
        </div>
    
    }}
    </ProductConsumer>
    )
}
}
 
