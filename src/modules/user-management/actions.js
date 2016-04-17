import { AUTHENTICATED, AUTHENTICATE_FAILED, AUTHENTICATING } from './action-types';
import reactor from '../core/reactor';
import { API } from '../core/constants';

const errorMessages = {
    401: 'Bad credentials'
};

export default {
    authenticate(user, pass) {
        const creds = btoa(user + ':' + pass);

        reactor.dispatch(AUTHENTICATING, true);
        fetch(API.GITHUB.auth, {
            headers: {
                'Authorization': 'Basic ' + creds
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(errorMessages[res.status]);
            }
            else {
                return res.json();
            }
        })
        .then(res => reactor.dispatch(AUTHENTICATED, { info: res, isTalkingToServer: false }),
            err => reactor.dispatch(AUTHENTICATE_FAILED, { reason: err.message, isTalkingToServer: false}));
    }
}