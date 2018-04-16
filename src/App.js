import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Content from "./Content";


class App extends Component {
    constructor(){
        super()
        this.state={
            items:[]
        }
    }

    addItem(item){
        var items=this.state.items
        items.push(item)
        this.setState({items})
    }
  render() {
    return (
      <div>
          {/*<Header title="ssss"/>*/}
          {/*<Form onChange={this.submit}/>*/}

          <Content submit={this.addItem.bind(this)}/>
          <Footer items={this.state.items}/>
      </div>
    );
  }
}

export default App;
