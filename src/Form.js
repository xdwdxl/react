import React, { Component } from 'react';
import './App.css';

class Form extends React.Component {
    constructor(){
        super()
        this.state={
            input1:'',
            input2:'',
            input3:''
        }
    }

    onChange1(e){
        var value = e.target.value
        this.setState({input1:value})
    }
    onChange2(e){
        var value = e.target.value
        this.setState({input2:value})
    }
    onChange3(e){
        var value = e.target.value
        this.setState({input3:value})
    }
    submit(){
        var input1 = this.state.input1
        var input2 = this.state.input2
        var input3 = this.state.input3
        this.props.submit(input1,input2,input3)
    }

    render() {
        return (
           <div>
               <input onChange={this.onChange1.bind(this)} />
               <input onChange={this.onChange2.bind(this)} />
               <input onChange={this.onChange3.bind(this)} />
               <button onClick={this.submit.bind(this)}>submit</button>
           </div>
        );
    }
}

export default Form;
