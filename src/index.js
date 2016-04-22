import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { reactor } from './modules/core';
import UserStore from './modules/user-management/stores/user';
import RepoStore from './modules/repos/stores/repos';
import './style.less';

reactor.registerStores({
    user: UserStore,
    repos: RepoStore
});

window.reactor = reactor;

ReactDOM.render(<App />, document.getElementById('root'));
