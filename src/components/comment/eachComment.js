import React from "react";

export default class EachComment extends React.Component {
    render(){
        return <div>
            <div className='button eachComment'>
                <p className=''><b>Name: {this.props.name}</b></p>
                <p className='numbz'>{this.props.no}</p>
                <br />
                <p><b>Comment:</b> {this.props.message}</p>
            </div>
        </div>
    }
}
