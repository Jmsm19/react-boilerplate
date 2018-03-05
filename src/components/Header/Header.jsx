import React, { PureComponent } from 'react';

import { Layout } from 'antd';
import Aux from '../../utils/Aux';

import classNames from './Header.css';

class Header extends PureComponent {
  state = {};

  render() {
    return (
      <Aux>
        <Layout.Header className={classNames.Header} />
      </Aux>
    );
  }
}

export default Header;
