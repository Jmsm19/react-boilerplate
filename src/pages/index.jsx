import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../utils/Aux';

const IndexPage = props => (
  <Aux>
    <h1>Hello Man1{props.smt}!</h1>
  </Aux>
);

IndexPage.propTypes = {
  smt: PropTypes.number.isRequired,
};

export default IndexPage;
