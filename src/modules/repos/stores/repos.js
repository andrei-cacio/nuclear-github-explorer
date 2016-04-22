import { Store, toImmutable} from 'nuclear-js';
import { RECEIVE_REPOS } from '../action-types';

export default Store({
   getInitialState() {
       return toImmutable([]);
   },

    initialize() {
        this.on(RECEIVE_REPOS, handleRepos);
    }
});

function handleRepos(state, repos) {
    return state.merge(toImmutable(repos));
}