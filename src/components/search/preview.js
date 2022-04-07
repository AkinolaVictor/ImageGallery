import React from "react";
import '../styles/preview.css';
import { ProductConsumer } from "../../Context";

export default class Preview extends React.Component {
   
    render(){
        return (
            <ProductConsumer>
            {value=>{
                const {exitPreview, preview, imageData, prevControlup, getresolution, prevControldown} =value;

                const words = ()=>{
                    let word = imageData[preview].alt_description;
                    let newWord=''
                    let k = 0;
                    if(word.length>200){
                        k=200
                    }else{
                        k=word.length
                    }
                    for(let i = 0; i<k; i++){
                        newWord+=word[i]
                    }
                    return newWord+='...'
                }
                return ( 
                    <div className='Allpreview hide'>
                        <p className='exits' onClick={exitPreview}>Exit Preview Mode</p>
                        <div className='preview'>
                            
                            <div className='handleImage backL queryAid'>
                                <img src={imageData.length>0?imageData[preview].urls.small:'./download2.png'} className='imaged' width={getresolution(imageData.length>0?imageData[preview].width:'./90', imageData.length>0?imageData[preview].height:'./80')} height={getresolution(imageData.length>0?imageData[preview].height:'./90', imageData.length>0?imageData[preview].width:'./80')} />
                            </div>
                            <div className='handle details backR queryAid'>
                                <img src={imageData.length>0?imageData[preview].user.profile_image.large:'./download2.png'} className='profileImage' />
                                <p className='data a1'>Name: {imageData.length>0?imageData[preview].user.name:'./download2.png'}</p>
                                <p className='data a1'>Description: {imageData.length>0?words():'a photo'}</p>
                                <p className='data a1'>Total Likes: {imageData.length>0?imageData[preview].user.total_likes:'1'}</p>
                                <p className='data a1'>Download Link: {imageData.length>0?imageData[preview].links.download:'download'}</p>
                            </div>

                        </div>
                        <div className='lr'>
                                <div className='pagination'>
                                        <button className='page left nohover floata' data-id='14' onClick={prevControldown}> {'<'} </button>
                                </div> 
                                <div className='pagination'>
                                    <button className='page right nohover floatb' data-id='15' onClick={prevControlup}> {'>'} </button>
                                </div> 
                            </div>
                    </div>
                )}}
                
            </ProductConsumer>)
            
    }
}

