import React, { Component } from 'react';
import actions from '../modules/user-management/actions';
import Paper from '../../node_modules/material-ui/lib/paper';
import TextField from '../../node_modules/material-ui/lib/text-field';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import CircularProgress from '../../node_modules/material-ui/lib/circular-progress';
import ErrorText from './error-text';
import { reactor } from '../modules/core';
import * as getters from '../modules/user-management/getters';

const style = {
    paper: {
        height: 380,
        width: 314,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        top: '20%'
    },
    button: {
        margin: 12,
        display: 'block'
    },
    logo: {
        display: 'block',
        margin: '0 auto'
    }
};

const Login = React.createClass({
    mixins: [reactor.ReactMixin],
    getDataBindings: function() {
        return {
            isLoading: getters.isTalkingToServer,
            authFailedReason: getters.authFailedReason
        };
    },
    login: function() {
        actions.authenticate(this.usernameInput.getValue(), this.passInput.getValue());
    },
    render: function() {
        return (
            <Paper style={style.paper} zDepts={2}>
                <img style={style.logo} width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
                <TextField ref={(i) => this.usernameInput = i} value={this.state.username} hintText="Username" />
                <TextField ref={(i) => this.passInput = i} value={this.state.password} type="password" hintText="Password" />
                {
                    this.state.isLoading ? <CircularProgress /> :
                        <RaisedButton onMouseUp={this.login.bind(this)}
                                      label="Login"
                                      style={style.button}
                        />
                }
                {
                    this.state.authFailedReason ? <ErrorText message={this.state.authFailedReason} /> : ''
                }
            </Paper>
        );
    }
});

export default Login;
