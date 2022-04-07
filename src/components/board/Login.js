import React from "react";
import '../styles/board.css';
import { ProductConsumer } from "../../Context";
import fire from '../../config/fire';
import firebase from 'firebase';

export default class Login extends React.Component {
    constructor (props){
        super(props)
        this.state={
            Email: '',
            Password: '',
            errMsg: '',
            errMsg2: '',
            errMsg3:'',
            userId:undefined
        }

      
    }




    render(){
        return(
        <ProductConsumer>
            {value=>{
                const {newUser, login, handleChange, signUp, errMsg, errMsg2, errMsg3} =value;
        return <div className='board'>
            <div className='button access sign'>
                <h1 className='h11'>SIGN IN</h1>
                <form action="/Login">
                    <p>E-mail:</p> 
                    <input type="text"  name="Email" className='screen texts userInput' placeholder="Enter Your E-Mail" onChange={handleChange}/>
                    <p>Password:</p>
                    <input type="password"  name="Password" className='screen texts userInput' placeholder="Enter Your Password" onChange={handleChange}/>
                    <button data-id='5' className='signin' onClick={login}>Sign In</button>
                </form>
                <button data-id='5' className='newuser' onClick={newUser}>New User</button>
                <p className='errmsg'>{errMsg}</p>
            </div>

            <div className='button access signup hide'>
                <h1 className='h11'>SIGN UP</h1>
                <form action="/signUp">
                    <p>E-mail:</p> 
                    <input type="text"  name="Email" onChange={handleChange} className='screen texts userInput mail' placeholder="Enter Your E-Mail" />
                    
                    <p>Password:</p>
                    <input type="Password"  name="Password" className='screen texts userInput pass1' placeholder="Enter Your Password" onChange={handleChange} />
                    <input type="Password"  name="Password2" className='screen texts userInput gap pass2' placeholder="Confirm your Password" />
                    <div className='errmsg'>{errMsg3}</div>
                    <button data-id='5' className='signin ups' onClick={signUp}>Sign UP</button>
                </form>
                <div className='errmsg'>{errMsg2}</div>
            </div>
        </div>
        }}
        </ProductConsumer>
        )
    }
}
 