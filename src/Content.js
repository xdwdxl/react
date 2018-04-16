import React, { Component } from 'react';
import './App.css';

class Content extends Component {
    constructor(){
        super()
        this.state = {
            input:""
        }
    }
    onChange(e){
        var value = e.target.value
        this.setState({input:value})
    }
    submit(){
        var value = this.state.input
        this.props.submit(value)
    }
    render() {
        return (


            <div align = "center">
                <input type = "text" onChange={this.onChange.bind(this)}/>
                    <button onClick={this.submit.bind(this)}>提交</button>
            </div>
        );
    }
}

export default Content;