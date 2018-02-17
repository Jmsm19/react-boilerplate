import React from 'react';
import { connect as ConnectRedux } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Helmet from 'react-helmet';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';

import IndexPage from '../../pages/index';
import NotFoundPage from '../../pages/404';

import { doSomething } from '../../store/actions';
import classNames from './Layout.css';

const Layout = props => (
  <div>
    <Helmet>
      <title>Manten | Inicio</title>
      <meta name="description" content="Layout component" />
    </Helmet>

    <Router>
      <div>
        <nav>
          <Button type="primary" onClick={props.onAction}>
            Increase Number <Icon type="plus" />
          </Button>

          <Button type="primary">
            <NavLink to="/">Home</NavLink>
          </Button>

          <Button type="primary">
            <NavLink to="/NotFound">NotFound</NavLink>
          </Button>
        </nav>
        <div className={classNames.Content}>
          <Switch>
            <Route exact path="/" render={() => <IndexPage smt={props.smt} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

Layout.propTypes = {
  smt: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  smt: state.smt.something,
});

const mapDispatchToProps = dispatch => ({
  onAction: () => dispatch(doSomething(Math.floor(Math.random() * 10))),
});

export default ConnectRedux(mapStateToProps, mapDispatchToProps)(Layout);