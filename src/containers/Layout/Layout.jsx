import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout as AntdLayout, Menu, Icon } from 'antd';
import uuid from 'uuid/v4';

import IndexPage from '../../pages/index';
import NotFoundPage from '../../pages/404';

import classNames from './Layout.css';
import Aux from '../../utils/Aux';
import Header from '../../components/Header/Header';

const { Content, Footer, Sider } = AntdLayout;

const Layout = () => (
  <Aux>
    <Router>
      <AntdLayout className={classNames.FullPage}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className={classNames.Logo} />
          <Menu theme="dark" mode="inline">
            <Menu.Item key={uuid()}>
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={uuid()}>
              <Link to="/NotFound">
                <Icon type="exclamation-circle-o" />
                <span className="nav-text">NotFound</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntdLayout className={classNames.FullPage}>
          <Header />
          <Content className={classNames.Content}>
            <div className={classNames.ContentBox}>
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Content>
          <Footer className={classNames.Footer}>©2018 Created by Manten</Footer>
        </AntdLayout>
      </AntdLayout>
    </Router>
  </Aux>
);

export default Layout;
