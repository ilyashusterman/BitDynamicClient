import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui";
import BottomNavigationBar from "./components/BottomNavigationBar";
import AIDrawer from "./components/AIDrawer";
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
    <div>
      <div>
        <div className="App-header">
          <h2>Welcome to Bitcoin</h2>
        </div>
      </div>
          <AIDrawer/>
        <BottomNavigationBar />
    </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
