import React from 'react';
import PropTypes from 'prop-types';
import { connect as ConnectRedux } from 'react-redux';

import { doSomething } from '../../store/actions';

const App = props => (
  <div>
    <button onClick={props.onAction}>Increase Number</button>
    <h1>Hello Man1{props.smt}!</h1>
  </div>
);

App.propTypes = {
  smt: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  smt: state.smt.something,
});

const mapDispatchToProps = dispatch => ({
  onAction: () => dispatch(doSomething(Math.floor(Math.random() * 10))),
});

export default ConnectRedux(mapStateToProps, mapDispatchToProps)(App);
