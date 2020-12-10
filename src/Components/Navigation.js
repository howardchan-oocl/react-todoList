import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class Navigation extends Component {
    render() {
        return (
          <React.Fragment>
            <Menu theme="dark" mode="vertical">
              <Menu.Item>
                <Link to='/list'>go to list page</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/done'>go to done page</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/labels'>go to labels page</Link>
              </Menu.Item>
            </Menu>
          </React.Fragment>
        );
    }
}

export default Navigation;