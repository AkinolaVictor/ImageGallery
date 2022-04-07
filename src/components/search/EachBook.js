import React from "react";

export default class EachBook extends React.Component {
    render(){
        return <div className='handleAll'>
            {/* <button className='eachcontent nohover eachbooK box1'>
                <img src={this.props.image} className='border-book' width='97%' height='70%' onClick={this.props.click}/>
                <div className='BookDetail'>
                    <p>Title: {this.props.title} <span className='button bookboard' id={`s${this.props.id}`} onClick={this.props.save}> Save </span></p>
                    <p>Author: {this.props.author}</p>
                    <p>Published Year: {this.props.year}</p>
                </div>
            </button> */}
            
            <div className="mages" onClick={this.props.click}>
                <div className='theImg'>
                    <img src={this.props.image} className='border-book' width='97%' height='70%' />
                    {/* <img src={this.props.image} className='borderz' width={this.props.width} height={this.props.height} onClick={this.props.click} /> */}
                </div>
                <div className='theTxt'>
                    {/* <p className='realTexts'>Made by: {this.props.owner}</p> */}
                    {/* <p className='saveBtn ' id={`s${this.props.id}`} onClick={this.props.save}> Save </p> */}
                    <p className='realTexts'>Title: {this.props.title}</p>
                    <p className='realTexts'>Author: {this.props.author}</p>
                    <p className='realTexts'>Published Year: {this.props.year}</p>
                    <span className='saveBtn' id={`s${this.props.id}`} onClick={(e)=>{e.stopPropagation(); this.props.save(e)}}> save </span>
                </div>
            </div>
            {/* <div className='optionB hide box2'>
                <p className='av'><i className="fas fa-download"></i></p>
                <p className='av'><i className="fas fa-cart-plus"></i></p>
                <p className='av'><i className="far fa-eye"></i></p>
                <p className='av'><i className='fas fa-columns' ></i></p>
            </div> */}
        </div>
    }
}

