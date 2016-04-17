import React, { Component } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';

const UIList = React.createClass({
    render: function() {
        return (
            <div>
                <List subheader="Repositories" insetSubheader={true}>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Photos"
                        secondaryText="Jan 9, 2014"
                    />
                </List>
            </div>
        );
    }
});

export default UIList;