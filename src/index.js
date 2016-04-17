import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { reactor } from './modules/core';
import UserStore from './modules/user-management/stores/user';
import './style.less';

reactor.registerStores({
    user: UserStore
});

window.reactor = reactor;

ReactDOM.render(<App />, document.getElementById('root'));
