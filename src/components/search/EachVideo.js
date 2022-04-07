import React from "react";

export default class EachBook extends React.Component {
    render(){
        return <div className='handleAll'>
            <button className='eachcontent nohover eachvideo box1'>
                <img src={this.props.image} className='border-book' width='97%' height='70%' />
                <div className='videoDetail'>
                    <p>Title: {this.props.title}</p>
                    <p>Description: {this.props.description}</p>
                    <p>Year: {this.props.year}</p>
                </div>
            </button>
            <div className='optionV box2 hide'>
                <p className='av'><i class="fas fa-download"></i></p>
                <p className='av'><i class="fas fa-cart-plus"></i></p>
                <p className='av'><i class="far fa-eye"></i></p>
                <p className='av'><i className='fas fa-columns' ></i></p>
            </div>
        </div>
    }
}

//AIzaSyA-iw7xzb3r88tmiLbw8JCvrOCIBlIOtBg

// //`https://www.googleapis.com/books/v1/volumes?q=intitle:${key}&startIndex=0&maxResults=40&key=${ApiKey}`