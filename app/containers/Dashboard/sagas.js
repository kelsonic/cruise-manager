/**
 * Gets the repositories of the user from Github
 */

import { take } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';


/**
 * Root saga manages watcher lifecycle
 */
export function* dashboardWatcher() {
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
}

// Bootstrap sagas
export default [
  dashboardWatcher,
];
