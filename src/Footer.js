import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        var items = this.props.items
        var data= []
        for(var i=0;i<items.length;++i){
            data.push(<li key={i}>{items[i]}</li>)
                }
        return (
                <ul>
                    {data}
                </ul>
        );
    }
}

export default Footer;
