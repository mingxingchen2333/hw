import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import WordLink from "./wordLink";

export default class SortByArtist extends Component {
    constructor(props) {
        super(props);
    }

    fontStyle = {
        color: 'white',
        fontWeight: 600,
        fontSize: '14px'
    };

    render() {
        return (
            <div style={this.fontStyle}>
                <WordLink name="SORT BY Name" />
            </div>
        );
    }
}