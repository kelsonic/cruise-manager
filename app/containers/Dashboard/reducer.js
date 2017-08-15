/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_NAME,
} from './constants';

const initialState = fromJS({
  name: '',
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      // Object.assign(state, {}, { name: action.name });
      // Update the name property in our state, but we have to always return back a modified clone of our previous state!! :)
      return state.set('name', action.name);
    default:
      return state;
  }
}

export default dashboardReducer;
