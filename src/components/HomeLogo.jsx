import React, { Component } from "react";

export default class Logo extends Component {

    logoStyle = {
        color: 'white',
        fontWeight: 600,
        fontSize: '17px'
    };

    render() {
        return (
            <div>
                <h1 style={this.logoStyle}>Music Hunter</h1>
            </div>
        );
    }
}