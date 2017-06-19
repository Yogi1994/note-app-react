/**
 * @fileoverview this is the main app.
 */

import {connect} from 'react-redux';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllNotes from './components/screen/note-screen';
import * as AppActions from './actions/app-action';


class App extends Component {
  state : Object
  constructor(props){
    super(props);
    this.state = {
      dirToCreate: ""
    };
  }

  componentWillMount() {
    this.props.appInit();
  }

  render() {
    
    return (
      <div className="App">
        <div className="container">
          <div className="fileContainer row">
            <AllNotes />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state : Object) {
  return {
    
  };
}

function mapDispatchToProps(dispatch : Function) {
  return {
    appInit: () => {
      dispatch(AppActions.appInit());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
