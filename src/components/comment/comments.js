import React from "react";
import { ProductConsumer } from "../../Context";
import '../styles/comment.css';
import '../styles/mediaComment.css';
import EachComment from './eachComment'

export default class Comment extends React.Component {
    render(){
        return(
        <ProductConsumer>
            {value=>{
                const {getComment, handleChange, commentError, hide, allComments} =value;
                return <div className='comment'>
                    {commentError? <p className='msgz'>{commentError}</p> :<span></span>}
                    <div className='button commentSize sign'>
                        <h2 className='nmz'>Comment Box</h2>
                        <form>
                            <p className='dname'>Name</p>
                            <input type="text"  name="commenter" className='screen texts userInput' onChange={handleChange} placeholder="Enter your Name"/>
                            <p className='dname'>Comment</p>
                            <input type="text"  name="comment" className='screen commentBox' onChange={handleChange} placeholder="Enter your Comment"/>
                            <button data-id='5' className='signin' onClick={getComment}>Submit</button>
                        </form>
                        <button data-id='5' className='signin' onClick={hide}>View comments</button>
                    </div>

                    <div className='theComment hide'>
                        <h2>COMMENTS</h2>

                        {allComments.length==0?
                        <h3>You Need to create an account or login to be able to see the comments</h3>:
                        allComments.slice(0).reverse().map(dat=>{
                           return <EachComment name={dat.name}
                                            message={dat.comment}
                                            no={dat.no}
                                            key={dat.id}
                                    /> 
                        })
                        }

                    </div>

                </div>
            }}
        </ProductConsumer>
        )
    }
}
