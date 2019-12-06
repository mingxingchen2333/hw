import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            isToggleOn: true,
            display: 'block'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            display: this.state.isToggleOn ? 'none' : 'block'
        })
    }

    /* render function, etc */
  render() {
    return (
        <body>
        <Route exact path="/" component={Home}/>
        </body>
    );
  }
};