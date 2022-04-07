import React from "react";
import '../styles/preview.css';
import { ProductConsumer } from "../../Context";

export default class BookPreview extends React.Component {
   
    render(){
        return (
            <ProductConsumer>
            {value=>{
                const {exitPreview, preview2, bookData, prevControlup2, prevControldown2, prevLoading} =value;
                //const gett = bookData[preview].volumeInfo
                const words = ()=>{
                    let word = bookData[preview2].volumeInfo.description;
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
                    // console.log(newWord+='...');
                    // console.log(word);
                    return newWord+='...'
                }
                return ( 
                    <div className='Allpreview hide'>
                        <p className='exits' onClick={exitPreview}>Exit Preview Mode</p>
                        <div className='preview'>
                            
                            <div className='handleImage queryAid backL'>
                                <img src={prevLoading ?bookData[preview2].volumeInfo.imageLinks.thumbnail:'./download2.png'} className='imaged' width='70%' height='80%' />
                            </div>
                            <div className='handle details queryAid backR'>
                                <p className='data 1'>Title: {prevLoading ?bookData[preview2].volumeInfo.title:'./download2.png'}</p>
                                <p className='data 1'>Author: {prevLoading ?bookData[preview2].volumeInfo.authors:'1'}</p>
                                <p className='data 1' style={{fontSize: '9px'}}>Description: {prevLoading ?words():'a photo'}</p>
                                <p className='data 1'>Page Count: {prevLoading ?bookData[preview2].volumeInfo.pageCount:'1'}</p>
                                <p className='data 1'>Preview Link: {prevLoading ?bookData[preview2].volumeInfo.previewLink:'download'}</p>
                            </div>

                        </div>
                        <div className='lr'>
                                <div className='pagination'>
                                        <button className='page left nohover floata' data-id='14' onClick={prevControldown2}> {'<'} </button>
                                </div> 
                                <div className='pagination'>
                                    <button className='page right nohover floatb' data-id='15' onClick={prevControlup2}> {'>'} </button>
                                </div> 
                            </div>
                    </div>
                )}}
                
            </ProductConsumer>)
            
    }
}

