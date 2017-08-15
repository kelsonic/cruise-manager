import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard state domain
 */
// These selectors can be used by other containers in your application! :)
const selectDashboardDomain = () => (state) => state.get('dashboard'); // { name: '' }


// We are selecting 'portions' of our dashboard state here.
// The portion we are interested in is the key-value pair 'name'.
const selectName = () => createSelector(
  // When we create a selector, we need to grab large parts of state and filter it down to smaller chunks.
  // Selecting the 'dashboard domain' here, we get back { name: '' }
  selectDashboardDomain(),
  (dashboardState) => dashboardState.get('name')
);


export {
  selectName,
};
