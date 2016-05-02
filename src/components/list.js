import React, { Component } from 'react';
import { connect } from 'nuclear-js-react-addons';
import * as getters from '../modules/repos/getters';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import CodeIcon from 'material-ui/lib/svg-icons/action/code';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Highlight from './highlight';

class UIListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar icon={<CodeIcon />} />}
                rightIcon={<ActionInfo />}
                secondaryText={this.props.secondText}
            >
                <Highlight value={this.props.primaryText} query={this.props.query} />
            </ListItem>
        )
    }
}

function mapStateToProps() {
    return {
        query: getters.searchQuery
    }
}

const ConnectedUIListItem = connect(mapStateToProps)(UIListItem);

const UIList = React.createClass({
    render: function() {
        return (
            <List>
                { this.props.items.map(item =>
                    <ConnectedUIListItem
                        key={item.id}
                        primaryText={item.name}
                        secondText={item.description}
                        url={item.url} />)
                }
            </List>
        );
    }
});

export default UIList;