/*
 *
 * Dashboard
 *
 */

// Dependencies
import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Internals
import { updateNameAction } from './actions';
import { selectName } from './selectors';
import './styles.scss';


// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    // Action creators
    updateName: PropTypes.func.isRequired,
  };

  render() {
    // We can refactor this a bit by destructuring here:
    const { name, updateName } = this.props;

    return (
      <div className="dashboard">
        <h1>Insert your name here:</h1>
        <input
          onChange={updateName}
          value={name}
        />
        <p>Your name is {name}</p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // Now dashboard component has this.props.name
  name: selectName(),
});

// mapDispatchToProps should have been named mapActionCreatorsToProps because it
// maps actions to props!
function mapDispatchToProps(dispatch) {
  return {
    updateName: (event) => dispatch(updateNameAction(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
