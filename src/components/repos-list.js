import React, { Component } from 'react';
import { connect, Provider } from 'nuclear-js-react-addons';
import * as userGetters from '../modules/user-management/getters';
import * as repoGetters from '../modules/repos/getters';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Search from './search';
import List from './list';
import actions from '../modules/repos/actions';
import { reactor } from '../modules/core';

class Repos extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        actions.fetchRepos();
    }

    render() {
        const {info, repos, results, query} = this.props;
        return (
            <Card>
                <CardHeader
                    title={info.name}
                    subtitle={info.username}
                    avatar={info.avatar}
                />
                <CardTitle title="Github Explorer" />
                <Search/>
                <CardText>
                     <Provider reactor={reactor}>
                        <List items={query.length ? results : repos} />
                    </Provider>
                </CardText>
            </Card>
        );
    }
}

function mapStateToProps() {
    return {
        info: userGetters.userInfo,
        repos: repoGetters.reposList,
        results: repoGetters.searchResults,
        query: repoGetters.searchQuery
    }
}

const ConnectedRepos = connect(mapStateToProps)(Repos);

export default ConnectedRepos;