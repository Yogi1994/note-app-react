import React, { Component } from 'react';
import '../../styles/note.css';


class Note extends Component {

  constructor(props: Object){
    super(props);
    this.state = {
      editMode: false,
      title: '',
      contantBody: '',
      color: ''
    };
  }

  componentWillReceiveProps(nextProps: Object){

  }

  onEditNote() {
    this.setState({
      editMode: true,
      title: this.props.data.title,
      contentBody: this.props.data.contentBody,
      color: this.props.data.color
    });
  }

  onCancelEdit() {
    this.setState({
      editMode: false,
      title: '',
      contentBody: '',
      color: ''
    });
  }

  onEditNoteSubmit() {
    this.props.onEditSubmit(this.state.title, this.state.contentBody, this.state.color);
    this.setState({
      editMode: false
    });
  }

  renderNonEditableHeader() {
    return (
      <div>
        <span><b>{this.props.data.title}</b></span>
        <button onClick={this.onEditNote.bind(this)}>Edit</button>
        <button>Color</button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }

  renderEditableHeader() {
    return (
      <div>
        <span>{this.state.title}</span>
        <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
        <button onClick={this.onEditNoteSubmit.bind(this)}>Save</button>
        <button>Color</button>
      </div>
    );
  }

  renderNoteHeader() {
    if(this.state.editMode){
      return this.renderEditableHeader();
    }
    return this.renderNonEditableHeader();
  }

  onChange() {
    var val = document.getElementById("contentId").value;
    this.setState({
      contentBody: val
    })
  }

  renderEditableBody() {
    return (
      <div>
      <input id="contentId" onChange={this.onChange.bind(this)} value={this.state.contentBody} />
      </div>
    );
  }

  renderNonEditableBody() {
    return (
      <div>
      {this.props.data.contentBody}
      </div>
    );
  }

  renderbody() {
    if(this.state.editMode){
      return this.renderEditableBody();
    }
    return this.renderNonEditableBody();
  }

  render() {
    return (
      <div className="noteOuterContainer"  >
        <div>
          {this.renderNoteHeader()}
        </div>
        <div>
          {this.renderbody()}
        </div>
      </div>
    );
  }
}


export default Note;
