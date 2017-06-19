import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

class Header extends React.Component {

    render() {
        const {styles} = this.props;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        return (
            <div>
                <AppBar
                    style={{...styles, ...style.appBar}}
                    title={
                        'Bitualization'
                    }
                    iconElementLeft={
                        <IconButton style={style.menuButton} >
                            <Menu color={white}>
                                <MenuItem primaryText="Share" leftIcon={<RemoveRedEye />} />
                            </Menu>
                        </IconButton>
                    }
                    iconElementRight={
                        <div style={style.iconsRightContainer}>
                            <IconMenu color={white}
                                      iconButtonElement={
                                          <IconButton><ViewModule color={white}/></IconButton>
                                      }
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem key={1} primaryText="Markets Dashboard"/>
                                <MenuItem key={2} primaryText="AI Product"/>
                                <MenuItem key={3} primaryText="My Wallet"/>
                            </IconMenu>
                            <IconMenu color={white}
                                      iconButtonElement={
                                          <IconButton><MoreVertIcon color={white}/></IconButton>
                                      }
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Sign out"/>
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

Header.propTypes = {
    styles: PropTypes.object,
    handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;