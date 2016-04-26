import React, { Component } from 'react';

const style = {
    'background-color': 'blue',
    'color': 'white'
};

export default class Highlight extends Component {
    constructor(props) {
        super(props);
    }

    highlightify(str) {
        return ( <span style={style}> {str} </span> );
    }

    getHighlightedText(query, value) {
        const qRegex = new RegExp(query, 'g');
        return value.replace(qRegex, this.highlightify(query));
    }

    render() {
        return (this.props.query) ?
            this.getHighlightedText(this.props.query, this.props.value) :
            (<b> {this.props.value} </b>);
    }
}