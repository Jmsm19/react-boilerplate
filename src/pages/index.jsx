import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = props => (
  <div>
    <h1>Hello Man1{props.smt}!</h1>
  </div>
);

IndexPage.propTypes = {
  smt: PropTypes.number.isRequired,
};

export default IndexPage;
