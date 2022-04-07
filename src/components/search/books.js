import React from "react";
import BookReciever from './BookReciever';
import BookPreview from './bookPreview';
import { ProductConsumer } from "../../Context";

export default class Books extends React.Component {
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const { savefail} =value;
        return <div className='carrier'>
                <div className='hide'>
                    <a href='#google'><button data-id='13' className='fetch site'>Google</button></a>
                    <a href='#amazon'><button data-id='14' className='fetch site' >Amazon</button></a>
                    <a href='#others'><button data-id='15' className='fetch site' >others</button></a>
                </div>
                {savefail ? <span><br />{savefail}</span> : <span></span>}
                <button className='resize' id='google'>{"books"} fetched from {"Google Books"}</button>
                <BookReciever />
                <BookPreview/>    
                <br/>  
        </div>
                }}
            </ProductConsumer>
        )
    }
}

