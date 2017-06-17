/**
 * Created by ilya on 6/11/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
import {FloatingActionButton} from "material-ui";
import './AIDrawer.css'
import {ContentAdd,ContentRemove} from "material-ui/svg-icons/index.es";



export default class AIDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div className="AiDrwr">
                <FloatingActionButton onTouchTap={this.handleToggle} >
                    {this.state.open? <ContentRemove  />:  <ContentAdd/> }
                </FloatingActionButton>
                <Drawer width={300} openSecondary={true} open={this.state.open} >
                    <AppBar title="AI Bot" />
                    <h1>hello dashboard</h1>
                </Drawer>
            </div>
        );
    }
}