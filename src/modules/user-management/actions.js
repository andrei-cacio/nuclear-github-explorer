import { AUTHENTICATED, AUTHENTICATE_FAILED, AUTHENTICATING } from './action-types';
import reactor from '../core/reactor';

const errorMessages = {
    401: 'Bad credentials'
};

export default {
    authenticate(user, pass) {
        const creds = btoa(user + ':' + pass);

        reactor.dispatch(AUTHENTICATING, true);
        fetch('https://api.github.com/user', {
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
        .then(res => {
            reactor.dispatch(AUTHENTICATED, res);
        }, err => reactor.dispatch(AUTHENTICATE_FAILED, { reason: err.message, isTalkingToServer: false}));
    }
}