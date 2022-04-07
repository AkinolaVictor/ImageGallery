import React from "react";
import { ProductConsumer } from "../../Context";
import EachImage from './EachImage'
import '../styles/eachContent.css'

export default class Reciever extends React.Component {
    
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const { numb, imageLoading, savedImages, getresolution, keyEmpty, activatePreview, savePics, removeImages} =value;
                   

                        return  <div className='center'>
                                    <div className='ImageReciever'>
                                    {
                                        savedImages.length>0?
                                        savedImages.map(dat=> <EachImage image={dat.urls.small} owner={dat.user.name} 
                                                                    width={getresolution(dat.width, dat.height)}  
                                                                    height={getresolution(dat.height, dat.width)}
                                                                    remove={()=>removeImages(dat.pid)}
                                                                    id={'hide'} 
                                                                    download= {dat.links.download} key={dat.pid}/>):
                                        <p>{'You have NO Saved Books, you can make searches and save your books here'}</p>
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

