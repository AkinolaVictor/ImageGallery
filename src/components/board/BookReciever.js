import React from "react";
import { ProductConsumer } from "../../Context";
import EachBook from './EachBook'
import '../styles/eachContent.css'

export default class BookReciever extends React.Component {
    render(){
        return(
            <ProductConsumer>
            {value=>{
                const { savedBooks, removeBooks, keyEmpty, pageAdd, pageSub, bookPage, bookMaxPage, activatePreview2, saveBooks } =value;
            
            return(
                <div className='center'>
                    <div className='BookReciever'>

                    {/* <p>{bookLoading=="empty"?'No Match Found': 'Here is your result'}</p> */}
                        {
                            savedBooks.length>0?
                            savedBooks.map(book => {return <EachBook image={book.volumeInfo.imageLinks.smallThumbnail}
                                                        title={book.volumeInfo.title}
                                                        author={book.volumeInfo.authors}
                                                        year={book.volumeInfo.publishedDate}
                                                        id={book.id}
                                                        remove={()=> removeBooks(book.pid)}
                                                        key={book.pid}/>}):
                            <p>{keyEmpty?'Type in what you want to search in the input box': 'Loading...'}</p>
                        }
                    </div> 
                    <div className='pagination hide'>
                        <button className={bookPage==0? 'page left nohover hide': 'page left nohover'} onClick={pageSub}> {'<'} </button>
                        <p className='track'>page {bookPage+1} of {bookMaxPage}</p>
                        <button className={bookPage==bookMaxPage? 'page right nohover hide': 'page right nohover'} onClick={pageAdd}> {'>'} </button>
                    </div> 
                </div>
            )
            }}

            </ProductConsumer>
        );
        
    }
}

