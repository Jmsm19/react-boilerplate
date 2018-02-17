import React from 'react';
import Helmet from 'react-helmet';
import { Button, Icon } from 'antd';

import PropTypes from 'prop-types';

const Layout = props => (
  <div>
    <Helmet>
      <title>Manten | Inicio</title>
      <meta name="description" content="Layout component" />
    </Helmet>
    <nav>
      <Button type="primary" onClick={props.onAction}>
        Increase Number <Icon type="plus" />
      </Button>
    </nav>

    <h1>Hello Man1{props.smt}!</h1>
    <div>{props.children}</div>
  </div>
);

Layout.propTypes = {
  smt: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
