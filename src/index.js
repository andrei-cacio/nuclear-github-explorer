import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import reactor from './modules/core/reactor';
import UserStore from './modules/user-management/stores/user';
import './style.less';

reactor.registerStores({
    user: UserStore
});

window.reactor = reactor;

ReactDOM.render(<Login />, document.getElementById('root'));
