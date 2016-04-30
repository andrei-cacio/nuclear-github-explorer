import { Store, toImmutable} from 'nuclear-js';
import { RECEIVE_REPOS, SEARCHING } from '../action-types';

export default Store({
   getInitialState() {
       return toImmutable({
           all: [],
           search: {
               query: '',
               results: []
           }
       });
   },

    initialize() {
        this.on(RECEIVE_REPOS, handleRepos);
        this.on(SEARCHING, handleSearch);
    }
});

function handleRepos(state, fetchedRepos) {
    return state.update('all', all => all.merge(toImmutable(fetchedRepos)));
}

function handleSearch(state, newQuery) {
    return state.update('search', search => 
        search
            .update('query', query => newQuery)
            .update('results', () => {
                const nameRegex = new RegExp(newQuery, 'g');
                return state.get('all').filter(repo => nameRegex.test(repo.get('name')));
            })
    );
}