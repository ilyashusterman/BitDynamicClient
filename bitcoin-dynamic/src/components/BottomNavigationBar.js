/**
 * Created by ilya on 6/11/17.
 */
import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconMarketsOn from 'material-ui/svg-icons/hardware/computer';
import IconMainBox from 'material-ui/svg-icons/action/account-box';
import IconSettingsBox from 'material-ui/svg-icons/action/all-out';
const settingsBox = <IconSettingsBox />;
const mainIcon = <IconMainBox />;
const marketsIcon = <IconMarketsOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationBar extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Main"
                        icon={mainIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Markets"
                        icon={marketsIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Settings"
                        icon={settingsBox}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNavigationBar;