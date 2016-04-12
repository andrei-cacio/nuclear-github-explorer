import React, { Component } from 'react';
import actions from '../../modules/user-management/actions';
import Paper from '../../../node_modules/material-ui/lib/paper';
import TextField from '../../../node_modules/material-ui/lib/text-field';
import RaisedButton from '../../../node_modules/material-ui/lib/raised-button';
import CircularProgress from '../../../node_modules/material-ui/lib/circular-progress';

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
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLoading: false
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    getEncodedCredentials() {
        return btoa(this.state.username + ':' + this.state.password);
    }

    login() {
        this.setState({
            isLoading: true
        });

        actions.authenticate(this.state.username, this.state.password);
    }

    render() {
        return (
            <Paper style={style} zDepts={2}>
                <img class="github-logo" width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
                <TextField value={this.state.username} onChange={this.handleUsernameChange.bind(this)} hintText="Username" />
                <TextField value={this.state.password} onChange={this.handlePasswordChange.bind(this)} type="password" hintText="Password" />
                {
                    this.state.isLoading ? <CircularProgress /> :
                        <RaisedButton onMouseUp={this.login.bind(this)}
                                      label="Login"
                                      style={buttonStyle}
                        ></RaisedButton>
                }
            </Paper>
        );
    }
};