import React from "react";
import '../styles/preview.css';
import { ProductConsumer } from "../../Context";

export default class BookPreview extends React.Component {
   
    render(){
        return (
            <ProductConsumer>
            {value=>{
                const {exitPreview, preview2, savedBooks, prevControlup2, prevControldown2} =value;
                //const gett = bookData[preview].volumeInfo
                return ( 
                    <div className='Allpreview hide'>
                        <p className='exits' onClick={exitPreview}>Exit Preview Mode</p>
                        <div className='preview'>
                            
                            <div className='handleImage backL'>
                                <img src={savedBooks.length>0 ?savedBooks[preview2].volumeInfo.imageLinks.thumbnail:'./download2.png'} className='imaged' width='70%' height='80%' />
                            </div>
                            <div className='handle details backR'>
                                <p className='data 1'>Title: {savedBooks.length>0 ?savedBooks[preview2].volumeInfo.title:'./download2.png'}</p>
                                <p className='data 1'>Author: {savedBooks.length>0 ?savedBooks[preview2].volumeInfo.authors:'1'}</p>
                                <p className='data 1'>Description: {savedBooks.length>0 ?savedBooks[preview2].volumeInfo.description:'a photo'}</p>
                                <p className='data 1'>Page Count: {savedBooks.length>0 ?savedBooks[preview2].volumeInfo.pageCount:'1'}</p>
                                <p className='data 1'>Preview Link: {savedBooks.length>0 ?savedBooks[preview2].volumeInfo.previewLink:'download'}</p>
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

