import React from "react";
import EachVideo from './EachVideo'
import '../styles/eachContent.css'

export default class VideoReciever extends React.Component {
    render(){
        return(
            <div className='center'>
                <div className='VideoReciever'>
                    <EachVideo 
                        image={'./img/download2.png'}
                        title={'Sholin Soccer'}
                        description={'A good Movie'}
                        year={'2016'}
                    />
                    <EachVideo 
                        image={'./img/download2.png'}
                        title={'Sholin Soccer'}
                        description={'A good Movie'}
                        year={'2016'}
                    />
                    
                    <EachVideo 
                        image={'./img/download2.png'}
                        title={'Sholin Soccer'}
                        description={'A good Movie'}
                        year={'2016'}
                    />
                    
                    <EachVideo 
                        image={'./img/download2.png'}
                        title={'Sholin Soccer'}
                        description={'A good Movie'}
                        year={'2016'}
                    />
                    
                    <EachVideo />
                    <EachVideo />
                    <EachVideo />
                    <EachVideo />
                </div> 
                <div className='pagination'>
                    <button className='page left nohover'> {'<'} </button>
                    <p className='track'>page {1} of {50}</p>
                    <button className='page right nohover'> {'>'} </button>
                </div> 
            </div>
        );
    }
}

