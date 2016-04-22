import React from 'react';
import { reactor } from '../modules/core';
import * as userGetters from '../modules/user-management/getters';
import * as repoGetters from '../modules/repos/getters';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import List from './list';
import actions from '../modules/repos/actions';

const Repos = React.createClass({
    mixins: [reactor.ReactMixin],
    getDataBindings: function() {
        return {
            info: userGetters.userInfo,
            repos: repoGetters.reposList
        }
    },
    componentWillMount() {
        actions.fetchRepos();
    },
    render: function() {
        return (
            <Card>
                <CardHeader
                    title={this.state.info.name}
                    subtitle={this.state.info.username}
                    avatar={this.state.info.avatar}
                />
                <CardTitle title="Github Explorer" />
                <CardText>
                    <List items={this.state.repos} />
                </CardText>
            </Card>
        );
    }
});

export default Repos;