/**
 * Created by ilya on 6/11/17.
 */
import React, {Component} from 'react';
import IconMarketsOn from 'material-ui/svg-icons/hardware/computer';
import IconMainBox from 'material-ui/svg-icons/action/account-box';
import IconSettingsBox from 'material-ui/svg-icons/action/all-out';
import {Tabs, Tab} from 'material-ui/Tabs';
const settingsBox = <IconSettingsBox />;
const mainIcon = <IconMainBox />;
const marketsIcon = <IconMarketsOn />;

class BottomNavigationBar extends Component {
        render(){
                return (
                    <Tabs>
                            <Tab
                                icon={settingsBox}
                                label="Settings"
                            />
                            <Tab
                                icon={mainIcon}
                                label="Main"
                            />
                            <Tab
                                icon={marketsIcon}
                                label="Markets"
                            />
                    </Tabs>
                );
        }
}

export default BottomNavigationBar;

