import React from "react";

export default class EachImage extends React.Component {
    render(){
        return <div className='handleAll'>
            {/* <button className='eachcontent nohover box1'>
                <div className='dimg'>
                    <img src={this.props.image} className='borderz' width={this.props.width} height={this.props.height} onClick={this.props.click} />
                </div>
                <div className='contdetail'>
                    <p className='madeby'>Made by {this.props.owner}</p>
                    <p className='button myboard ' id={`s${this.props.id}`} onClick={this.props.save}> Save </p>
                </div>
            </button> */}
            <div className="mages">
                <div className='theImg'>
                    <img src={this.props.image} className='borderz' width={this.props.width} height={this.props.height} />
                </div>
                <div className='theTxt'>
                    <p className='realTexts'>Made by: {this.props.owner}</p>
                    <p className='saveBtn ' id={`s${this.props.id}`} onClick={this.props.save}> Save </p>
                </div>
            </div>
        </div>
    }
}
