import React from "react";
import VideoReciever from './VideoReciever'

export default class Videos extends React.Component {
    render(){
        return <div className='carrier'>
            <div className='hide'>
                <a href='#youtube'><button data-id='13' className='fetch site'>Youtube</button></a>
                <a href='#netflix'><button data-id='14' className='fetch site' >Netflix</button></a>
                <a href='#others'><button data-id='15' className='fetch site' >Others</button></a>
            </div>
            
            <button className='resize' id='youtube'>{"Videos"} fetched from {"youtube"}</button>
            <VideoReciever />
            <br />
        </div>
    }
}

