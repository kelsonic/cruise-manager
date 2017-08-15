/*
 *
 * Dashboard actions
 *
 */

import {
  UPDATE_NAME,
} from './constants';

export function updateNameAction(name) {
  return {
    type: UPDATE_NAME,
    name,
  };
}
