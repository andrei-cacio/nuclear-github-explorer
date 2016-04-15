import { Store, toImmutable } from 'nuclear-js';
import { AUTHENTICATED, AUTHENTICATE_FAILED, AUTHENTICATING } from '../action-types';

export default Store({
    getInitialState() {
        const status = toImmutable({
            isLoggedIn: false,
            isTalkingToServer: false,
            reason: ''
        });
        return toImmutable({ info: toImmutable({}), status: status })
    },

    initialize() {
        this.on(AUTHENTICATED, login);
        this.on(AUTHENTICATING, authInProgress);
        this.on(AUTHENTICATE_FAILED, failAuth);
    }
});

function authInProgress(state, isInProgress) {
    return state.update('status', status => status.set('isTalkingToServer', isInProgress));
}

function failAuth(state, { reason, isTalkingToServer }) {
    const failedStatus = toImmutable({
        reason: reason,
        isTalkingToServer: isTalkingToServer
    });
    return state.update('status', status => status.merge(failedStatus));
}

function login(state, info) {
    const userInfo = state.merge(info);

    return userInfo.update('status', status => status.set('isLoggedIn'), true);
}