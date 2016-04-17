import { API } from '../core/constants';
import * as getters from '../user-management/getters';
import { reactor } from '../core';
import { RECEIVE_REPOS } from './action-types';

export default {
    fetchRepos() {
        const userInfo = reactor.evaluateToJS(getters.userInfo);

        fetch(API.GITHUB.repos(userInfo.username))
            .then(res => res.json())
            .then(res => reactor.dispatch(RECEIVE_REPOS, res));
    }
};
