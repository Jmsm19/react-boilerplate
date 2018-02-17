import React from 'react';
import { connect as ConnectRedux } from 'react-redux';
import PropTypes from 'prop-types';

import { doSomething } from '../../store/actions';
import Layout from '../Layout/Layout';

export const App = props => (
  <Layout onAction={props.onAction} smt={props.smt}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, alias! Rem nam neque accusantium laboriosam
      earum? Accusamus, reiciendis. Cumque atque nisi commodi placeat, nulla cum itaque possimus consequatur veniam
      dolorem.
    </p>
  </Layout>
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
