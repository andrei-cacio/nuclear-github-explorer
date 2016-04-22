import { Store, toImmutable} from 'nuclear-js';
import { RECEIVE_REPOS, SEARCHING } from '../action-types';

export default Store({
   getInitialState() {
       return toImmutable({
           all: [],
           searchResults: []
       });
   },

    initialize() {
        this.on(RECEIVE_REPOS, handleRepos);
        this.on(SEARCHING, handleSearch);
    }
});

function handleRepos(state, fetchedRepos) {
    return state
        .update('all', all => all.merge(toImmutable(fetchedRepos)))
        .update('searchResults', all => all.merge(toImmutable(fetchedRepos)));
}

function handleSearch(state, query) {
    return state.update('searchResults', () => {
        const nameRegex = new RegExp(query, 'g');
        return state.get('all').filter(repo => nameRegex.test(repo.get('name')));
    });
}