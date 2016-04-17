import React, { Component } from 'react';
import Login from './login';
import Repos from './repos';
import { reactor } from '../modules/core';
import * as getters from '../modules/user-management/getters';

const App = React.createClass({
    mixins: [reactor.ReactMixin],
    getDataBindings: function() {
        return {
            isLoggedIn: getters.isLoggedIn
        }
    },
    render: function() {
        return (
            this.state.isLoggedIn ? <Repos /> : <Login />
        )
    }
});

export default App;