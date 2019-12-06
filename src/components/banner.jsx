import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    searchOuter = {
        position: 'relative',
        marginLeft: '20%',
        marginTop: '20px',
        display: 'inline-block',
    };

    searchInput = {
        margin: '0',
        width: '500px',
        fontSize: '20px',
        padding: '5px',
        border: '1px solid #EEEEEE',
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px',
    };

    searchSubmit = {
        margin: '0',
        fontSize: '20px',
        padding: '5px',
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px',
        border: '1px solid #EEEEEE',
        backgroundColor: '#DAA520'
    };

    logoStyle = {
        color: 'white',
        fontSize: '20px',
        display: 'inline-block',
    };

    sortStyle = {
        color: 'white',
        marginLeft: '70%',
        marginTop: '1.7%',
        fontSize: '15px',
        display: 'inline-block',
    };

    handlePress() {
        return (
            <div>
                <Link to="/about"/>
            </div>
            );
    }

    render() {
        return (
            <div style={this.searchOuter}>
                <input style={this.searchInput} placeholder="Search more videos..." type="text" name="search" /><input style={this.searchSubmit} onClick={this.handlePress} type="submit" value="Search"/>
            </div>

        );
    }
}
