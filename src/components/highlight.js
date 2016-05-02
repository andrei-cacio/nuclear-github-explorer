import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const style = {
    'backgroundColor': '#BA39F9',
    'color': 'white',
    'display': 'inline-block'
};

export default class Highlight extends Component {
    constructor(props) {
        super(props);
    }

    getHighlightedText(query, value) {
        const qRegex = new RegExp(query, 'g');
        const matchedPieces = value.split(qRegex);
        
        if (!matchedPieces.length) {
            return (<b> {this.props.value} </b>);
        }
        
        const highlightedText = 
            (
                <b> 
                    {matchedPieces.slice(0, -1).map(piece => (
                        <text> 
                            <text>{piece}</text> 
                            <span style={style}> {query} </span> 
                        </text>
                    ))}
                    {matchedPieces.pop()} 
                </b>
            );
        
        return highlightedText;
    }

    render() {
        return (this.props.query) ?
            this.getHighlightedText(this.props.query, this.props.value) :
            (<b> {this.props.value} </b>);
    }
}