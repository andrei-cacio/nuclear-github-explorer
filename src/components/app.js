import React, { Component } from 'react';
import Login from './login';
import Repos from './repos';
import { reactor } from '../modules/core';
import * as getters from '../modules/user-management/getters';
import { Provider, connect } from 'nuclear-js-react-addons';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn } = this.props;
        return isLoggedIn ? <Repos /> : <Login />;
    }
}

function mapStateToProps(props) {
    return {
        isLoggedIn: getters.isLoggedIn
    }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;