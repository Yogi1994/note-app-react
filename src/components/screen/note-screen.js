import React, { Component } from 'react';
import * as AppActions from '../../actions/app-action';
import WiNote from '../ui/wi-note';
import {connect} from 'react-redux';

class AllNotes extends Component {

	constructor(props: Object){
		super(props);
	}

	onEditSubmit(noteId:string, title:string, contentBody: string, color: string){
		this.props.editNote(noteId, title, contentBody, color);
	}

	onDelete(noteId: string){
		this.props.deleteNote(noteId);
	}

	addNewNote() {
		this.props.addNewNote('Untitled', 'body', '#acacac');
	}

	renderAllNotes(){
		if(this.props.noteList == {}) {
			return (<span>No notes yet.</span>);
		}
		var noteComponentsList = [];
		for (var key in this.props.noteList){
			let noteComponent = (
				<WiNote 
					key={key}
					data={this.props.noteList[key]} 
					onEditSubmit={(title, contentBody, color) => {this.onEditSubmit(key, title, contentBody, color)}}
					onDelete={this.onDelete.bind(this, key)}/>
			);
			noteComponentsList.push(noteComponent);
		}
		return noteComponentsList;
	}
	_onClickChangeDir() {

	}

  render() {
  	if(!this.props.noteList){
  		return (<span>Loading...</span>);
  	}
    return (
      <div className="imageOuterContainer" onClick={this._onClickChangeDir.bind(this)} >
      	<button onClick={this.addNewNote.bind(this)}>Add New Note</button>
        {this.renderAllNotes()}
      </div>
    );
  }
};

function mapStateToProps(state : Object) {
  return {
    noteList: state.appReducer.noteList
  };
}

function mapDispatchToProps(dispatch : Function) {
  return {
    addNewNote: (title:string, contentBody: string, color: string) => {
      dispatch(AppActions.addNewNote(title, contentBody, color));
    },
    deleteNote: (noteId: string) => {
      dispatch(AppActions.deleteNote(noteId));
    },
    editNote: (noteId: string, title:string, contentBody: string, color: string) => {
      dispatch(AppActions.editNote(noteId, title, contentBody, color));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
