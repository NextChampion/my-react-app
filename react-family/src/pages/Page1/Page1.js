import React, {Component} from 'react';
import './Page1.css';
import image from './images/bg1.png';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page1111~~~~~~~~~
                <img src={image}/>
            </div>
        )
    }
}
