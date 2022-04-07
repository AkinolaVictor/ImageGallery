import React from "react";
import { ProductConsumer } from "../../Context";
import EachBook from './EachBook'
import '../styles/eachContent.css'

export default class BookReciever extends React.Component {
    render(){
        return(
            <ProductConsumer>
            {value=>{
                const { bookData, bookLoading, keyEmpty2, pageAdd, pageSub, bookPage, bookMaxPage, activatePreview2, saveBooks, noBook } =value;
            
            return(
                <div className='center'>
                    <div className='BookReciever'>

                    {/* <p>{bookLoading=="empty"?'No Match Found': 'Here is your result'}</p> */}
                        {
                            bookLoading?
                            bookData.map(book => {
                                            if (book.volumeInfo.imageLinks.smallThumbnail){
                                                return <EachBook image={book.volumeInfo.imageLinks.smallThumbnail}
                                                        title={book.volumeInfo.title}
                                                        author={book.volumeInfo.authors}
                                                        year={book.volumeInfo.publishedDate}
                                                        click={()=>activatePreview2(0, book.id)}
                                                        id={book.id}
                                                        save={()=> saveBooks(book.id)}
                                                        key={book.id}/>
                                            }else {
                                                return <span></span>
                                            }
                                                    }):
                                                        <div className='expnd'>{keyEmpty2? <span>Type in what you want to search in the search box</span>:<span> {!noBook ? <span>Loading...</span> : <span>No Response recieved from the server</span>}</span>}</div>
                                            
                        }
                    </div> 
                    <div className='pagination'>
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

