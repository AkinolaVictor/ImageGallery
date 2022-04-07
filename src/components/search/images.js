import React from "react";
import ImageReciever from './ImageReciever';
import Preview from './preview';
import { ProductConsumer } from "../../Context";
import EachImage from "./EachImage";

export default class Images extends React.Component {
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const { savefail} =value;
                return <div className='carrier'> 
                    <div className='hide'>
                        <a href='#unsplash'><button data-id='12' className='fetch site'>Unsplash</button></a>
                        <a href='#gettyimage'><button data-id='13' className='fetch site'>Gettyimage</button></a>
                        <a href='#behance'><button data-id='14' className='fetch site' >Behance</button></a>
                        <a href='#pinterest'><button data-id='15' className='fetch site' >Pinterest</button></a>
                    </div>
                    {savefail ? <span><br />{savefail}</span> : <span></span>}
                    <button className='resize' id='unsplash'>{"Images"} fetched from {"Unsplash"}</button>
                    <ImageReciever />
                    {/* <Preview/> */}
                    <br />
                </div>
                }}
            </ProductConsumer>
        )
    }
}

