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


  // handleChangeInput(event) {
  //   this.setState({dirToCreate: event.target.value});
  // }

  // createDirectory(){
  //   if(this.state.dirToCreate !== ""){
  //     this.setState({dirToCreate:""});
  //     this.props.createDirectory(this.state.dirToCreate, this.props.filePath);
  //   }
  // }

  // onClickBack(){
  //   var path = this.props.filePath;
  //   path = path.slice(0,path.length -1);
  //   this.props.fetchDirList(path);
  // }

  // getPath() {
  //   var path = "";
  //   for( var i =0 ; i< this.props.filePath.length; i++){
  //     path += this.props.filePath[i] + " > ";
  //   }
  //   return path;
  // }

  render() {
    // if(!this.props.dirList) {
    //   return (
    //     <p>Loading ... </p>
    //   );
    // }
    return (
      <div className="App">
       {/*
               <div className="container topContainer">
                 
                 <div className="row">
                   <div className="col-md-3">
                     <button type="button" className="btn" onClick={this.onClickBack.bind(this)}>Back</button>
                   </div>
                   <div className="col-md-6">
                     <input type="text" className="form-control" value={this.state.dirToCreate} onChange={this.handleChangeInput.bind(this)} />
                   </div>
                   <div className="col-md-3">
       
                     <button type="button" className="btn" onClick={this.createDirectory.bind(this)}>Create</button>
                   </div>
                 </div>
               </div>
       */}
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
    // dirList: state.appReducer.dirList,
    // filePath: state.appReducer.filePath
  };
}

function mapDispatchToProps(dispatch : Function) {
  return {
    appInit: () => {
      dispatch(AppActions.appInit());
    },
    // createDirectory: (dir:string, filePath: Array<string>) => {
    //   dispatch(AppActions.createDirectory(dir, filePath));
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
