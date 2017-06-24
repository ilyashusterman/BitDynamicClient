import React, {Component} from 'react';
import './App.css';
import {LARGE, SMALL} from 'material-ui/utils/withWidth';
import {MuiThemeProvider} from 'material-ui';
import AIDrawer from './components/ai_dashboard/AIDrawer.js';
import HeaderToolBar from './components/header/Header';
import PageBase from  './components/PageBase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({navDrawerOpen: nextProps.width === LARGE});
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let {navDrawerOpen} = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };
        return (
            <MuiThemeProvider>

                <div>
                    <div>
                        <HeaderToolBar styles={styles.header}
                                       handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>
                    </div>
                    <PageBase title="Welcome to Bitualization">
                        <AIDrawer/>
                    </PageBase>
                </div>
            </MuiThemeProvider>
        );
    }

}

export default App;
