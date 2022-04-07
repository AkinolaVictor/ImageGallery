import React from "react";
import fire from '../../config/fire';
import Login from './Login';
import Board from './Board';
import { ProductConsumer } from "../../Context";

export default class Auth extends React.Component {
    
    

    
    render(){
        return(
            <ProductConsumer>
            {value=>{
                const { user } =value;
            return <div>
            {user ?
                <Board />:
                <Login />}
                
            </div>
            }}
            </ProductConsumer>
        )
    }
}
 
