import React, { Component } from 'react';
import '../App.css';

export default class WordLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            underline: 'none',
            genre: ""
        };

        this.handleUnderline = this.handleUnderline.bind(this);
        this.handleNoUnderline = this.handleNoUnderline.bind(this);

    };

    handleUnderline() {
        this.setState({
            underline: 'underline'
        })
    };

    handleNoUnderline() {
        this.setState({
            underline: 'none'
        })
    };

    wordStyle = {
        color: '',
        fontFamily: 'sans-serif',
        fontWeight: 500,
        fontSize: '13px',
        opacity: 0.5,
        marginTop: '-15px',
        marginLeft: '10px',
        textAlign: 'left',
        paddingTop: '10px'
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>
                    <a style={{textDecoration: this.state.underline, color: 'white', fontWeight: 500, fontSize: '13px', opacity: 0.5, marginTop: '-15px', marginLeft: '10px'}}
                         onMouseOver={this.handleUnderline}
                         onMouseLeave={this.handleNoUnderline}
                          >{this.props.name}</a>
                </p>
            </div>
        )
    }
}

// href="./genre-electronicdance"