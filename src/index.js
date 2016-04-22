import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { reactor } from './modules/core';
import { Provider } from 'nuclear-js-react-addons';
import UserStore from './modules/user-management/stores/user';
import RepoStore from './modules/repos/stores/repos';
import './style.less';

reactor.registerStores({
    user: UserStore,
    repos: RepoStore
});

window.reactor = reactor;

ReactDOM.render(<Provider reactor={reactor}><App /></Provider>, document.getElementById('root'));
