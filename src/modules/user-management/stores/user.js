import { Store, toImmutable } from 'nuclear-js';
import { AUTHENTICATED } from '../action-types';

export default Store({
    getInitialState() {
        return toImmutable({ isLoggedIn: false, info: toImmutable({}) })
    },

    initialize() {
        this.on(AUTHENTICATED, login);
    }
})

function login(state, userInfo) {
    const info = toImmutable(userInfo);

    return state.merge(info.set('isLoggedIn', true));
}