/**
 * @fileoverview A root reducer that combines all app specific reducers
 */

import {appReducer} from './app-reducer';

const initialState = {};

export default(state : Object = initialState, action : Object) => {
  return {
    appReducer: appReducer(state.appReducer, action)
  };
}
