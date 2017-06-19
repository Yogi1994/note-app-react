/**
 * @fileoverview Action creators for app.
 */


import * as ActionNames from '../constants/action-constants';

export function appInit() {
  return {
    type: ActionNames.INIT
  };
}

export function addNewNote (title:string, contentBody: string, color: string) {
  return {
    type: ActionNames.ADD_NEW_NOTE,
    data: {
      noteId: Date.now(),
      title: title,
      contentBody: contentBody,
      color: color
    }
  };
}

export function deleteNote (noteId: string) {
  return {
    type: ActionNames.DELETE_NOTE,
    noteId: noteId
  };
}

export function editNote (noteId: string,title:string, contentBody: string, color: string) {
  console.log({
      noteId: noteId,
      title: title,
      contentBody: contentBody,
      color: color
    });
  return {
    type: ActionNames.EDIT_NOTE,
    data: {
      noteId: noteId,
      title: title,
      contentBody: contentBody,
      color: color
    }
  };
}