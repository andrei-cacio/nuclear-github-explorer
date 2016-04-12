import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
    height: 380,
    width: 314,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    top: '25%'
};

const buttonStyle = {
    margin: 12,
    display: 'block'
};

export default class Login extends Component {
    render() {
        return (
            <Paper style={style} zDepts={2}>
                <img class="github-logo" width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
                <TextField hintText="Username" />
                <TextField type="password" hintText="Password" />

                <RaisedButton
                    label="Login"
                    style={buttonStyle}
                ></RaisedButton>
            </Paper>
        );
    }
};