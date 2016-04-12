import { AUTHENTICATED } from './action-types';
import reactor from '../core/reactor';

export default {
    authenticate(user, pass) {
        const creds = btoa(user + ':' + pass);
        fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'Basic ' + creds
            }
        })
        .then(res => res.json())
        .then(res => {
            reactor.dispatch(AUTHENTICATED, res);
        });
    }
}