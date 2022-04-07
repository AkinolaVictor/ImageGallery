import React from "react";
import './styles/Detail.css';
import { ProductConsumer } from "../Context";

export default class Detail extends React.Component {
    render(){
        return <div className='detail'>
            <p>Here is the result of your search</p>
            <p>{'111'} matches in total</p>
            <p>{30} from {'unsplash'} </p>
            <p>{29} from {'pinterest'} </p>
            <p>{44} from {'behance'} </p>
            <p>{8} from {'gettyimage'} </p>
            <p>{0} from {'imagefinder'} </p>
        </div>
    }
}

