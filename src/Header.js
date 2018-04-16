import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        var title = this.props.title
        return (

            <h1>
              title:{title}
            </h1>
        );
    }
}

export default Header;
