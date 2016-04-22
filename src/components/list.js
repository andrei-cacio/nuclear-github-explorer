import React, { Component } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/'
import Avatar from 'material-ui/lib/avatar';
import CodeIcon from 'material-ui/lib/svg-icons/action/code';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';

class UIListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar icon={<CodeIcon />} />}
                rightIcon={<ActionInfo />}
                primaryText={this.props.primaryText}
                secondaryText={this.props.secondText}
            />
        )
    }
}

const UIList = React.createClass({
    render: function() {
        return (
            <div>
                <List>
                    { this.props.items.map(item =>
                        <UIListItem
                            key={item.id}
                            primaryText={item.name}
                            secondText={item.language}
                            url={item.url} />)
                    }
                </List>
            </div>
        );
    }
});

export default UIList;