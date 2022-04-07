import React from "react";

export default class EachImage extends React.Component {
    render(){
        return <div className='handleAll'>
            {/* <button className='eachcontent nohover box1'>
                <div className='dimg'>
                    <img src={this.props.image} className='borderz' width={this.props.width} height={this.props.height}/>
                </div>
                <div className='contdetail'>
                    <p className='madeby'>Made by {this.props.owner}</p>
                    <p className='button myboard ' id={`s${this.props.id}`} onClick={this.props.remove}> Remove </p>
                </div>
            </button> */}
            <div className="mages">
                <div className='theImg'>
                    <img src={this.props.image} className='borderz' width={this.props.width} height={this.props.height} />
                </div>
                <div className='theTxt'>
                    <p className='realTexts'>Made by: {this.props.owner}</p>
                    <p className='saveBtn' id={`s${this.props.id}`} onClick={this.props.remove}> Remove </p>
                </div>
            </div>
            {/* <div className='optionI hide box2'>
                <a href={this.props.download} download className='av'><i class="fas fa-download"></i></a>
                <p className='av'><i class="fas fa-cart-plus"></i></p>
                <p className='av'><i class="far fa-eye"></i></p>
                <p className='av'><i className='fas fa-columns' ></i></p>
            </div> */}
        </div>
    }
}
