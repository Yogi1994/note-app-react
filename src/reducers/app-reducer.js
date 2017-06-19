/**
 * @fileoverview The reducer for the app.
 */

const initialState = {
  noteList: {
    'id1':{
      title: 'test1',
      contentBody: 'test body 1',
      color: '#aaa'
    }
  }
};

import * as ActionNames from '../constants/action-constants';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionNames.INIT:
      {
        return initialState;
      }
    case ActionNames.ADD_NEW_NOTE:
      { 
        var noteList = Object.assign({}, state.noteList);

        noteList[action.data.noteId] = {
          title: action.data.title,
          color: action.data.color,
          contentBody: action.data.contentBody
        };
        return Object.assign({}, state, {noteList: noteList})
      }
    case ActionNames.EDIT_NOTE:
      {
        var noteList = Object.assign({}, state.noteList);

        noteList[action.data.noteId] = {
          title: action.data.title,
          color: action.data.color,
          contentBody: action.data.contentBody
        };
      }
    case ActionNames.DELETE_NOTE:
      {
        
      }
    default:
      return state;
  }
};
