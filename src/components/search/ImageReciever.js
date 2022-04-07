import React from "react";
import { ProductConsumer } from "../../Context";
import EachImage from './EachImage'
import '../styles/eachContent.css'

export default class Reciever extends React.Component {
    
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const { numb, imageLoading, imageData, getresolution, keyEmpty, activatePreview, savePics, noImage} =value;
                   

                        return  <div className='center'>
                                    <div className='ImageReciever'>
                                    {
                                        imageLoading==true?
                                        imageData.map(dat=><EachImage click={()=>activatePreview(0, dat.id, imageData)} 
                                                                    image={dat.urls.small} owner={dat.user.name} 
                                                                    width={getresolution(dat.width, dat.height)}  
                                                                    height={getresolution(dat.height, dat.width)}
                                                                    save={()=>savePics(dat.id)}
                                                                    id={dat.id} 
                                                                    download= {dat.links.download} key={dat.id}/>):
                                        <p>{keyEmpty? <span>Type in what you want to search in the search box</span>:<span> {noImage==false ? <span>Loading...</span> : <span>No Response recieved from the server</span>}</span>}</p>
                                    }
                                    
                                    </div> 
                                    <div className='pagination hide'>
                                        <button className='page left nohover'> {'<'} </button>
                                        <p className='track'>page {numb} of {50}</p>
                                        <button className='page right nohover'> {'>'} </button>
                                    </div> 
                                </div>
                }}
            </ProductConsumer>
        );
    }
}

