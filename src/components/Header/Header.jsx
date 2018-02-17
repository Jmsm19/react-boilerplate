import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Icon } from 'antd';

class Header extends PureComponent {
  state = {};

  render() {
    return (
      <nav>
        <Button type="primary" onClick={this.props.onAction}>
          Increase Number <Icon type="plus" />
        </Button>

        <Button type="primary">
          <NavLink to="/">Home</NavLink>
        </Button>

        <Button type="primary">
          <NavLink to="/NotFound">NotFound</NavLink>
        </Button>
      </nav>
    );
  }
}

Header.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default Header;
