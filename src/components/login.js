import React, { Component } from 'react';
import actions from '../modules/user-management/actions';
import Paper from '../../node_modules/material-ui/lib/paper';
import TextField from '../../node_modules/material-ui/lib/text-field';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import CircularProgress from '../../node_modules/material-ui/lib/circular-progress';
import ErrorText from './error-text';
import { connect } from 'nuclear-js-react-addons';
import * as getters from '../modules/user-management/getters';

const ENTER_KEY = 13;

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

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        actions.authenticate(this.usernameInput.getValue(), this.passInput.getValue());
    }

    handleKeyPress(e) {
        if (e.charCode === ENTER_KEY) {
            this.login();
        }
    }

    render() {
        const { isLoading, authFailedReason } = this.props;
        return (
            <Paper style={style.paper} zDepts={2}>
                <img style={style.logo} width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
                <TextField onKeyPress={this.handleKeyPress.bind(this)} ref={(i) => this.usernameInput = i} hintText="Username" />
                <TextField onKeyPress={this.handleKeyPress.bind(this)} ref={(i) => this.passInput = i} type="password" hintText="Password" />
                {
                    isLoading ? <CircularProgress /> :
                        <RaisedButton onMouseUp={this.login.bind(this)}
                                      label="Login"
                                      style={style.button}
                        />
                }
                {
                    authFailedReason ? <ErrorText message={authFailedReason} /> : ''
                }
            </Paper>
        );
    }
}

function mapStateToProps(props) {
    return {
        isLoading: getters.isTalkingToServer,
        authFailedReason: getters.authFailedReason
    }
}

const ConnectedLogin = connect(mapStateToProps)(Login);

export default ConnectedLogin;
