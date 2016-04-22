import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import { SEARCHING } from '../modules/repos/action-types';
import { reactor } from '../modules/core';

const style = {
    margin: '20px',
    width: '95%'
};

class Search extends Component {
    constructor(props) {
        super(props);
    }
    
    handleSearch(event) {
        const query = event.target.value;
        reactor.dispatch(SEARCHING, query);
    }

    render() {
        return (
            <TextField onChange={this.handleSearch} hintText="Search..." style={style} />
        )
    }
}

export default Search;