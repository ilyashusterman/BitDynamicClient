/**
 * Created by ilya on 6/11/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class AIDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open AI Dashboard"
                    onTouchTap={this.handleToggle}
                />
                <Drawer width={300} openSecondary={true} open={this.state.open} >
                    <AppBar title="AI Bot" />
                    <h1>hello dashboard</h1>
                </Drawer>
            </div>
        );
    }
}