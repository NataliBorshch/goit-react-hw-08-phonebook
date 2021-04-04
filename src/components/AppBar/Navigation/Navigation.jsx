import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../../routes/routes';
import { authSelectors } from '../../../redux/auth';
import styles from '../AppBar.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.nav}
            activeClassName={styles.active_nav}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className={styles.item}>
            <NavLink
              exact
              to={routes.contacts}
              className={styles.nav}
              activeClassName={styles.active_nav}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
