import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
