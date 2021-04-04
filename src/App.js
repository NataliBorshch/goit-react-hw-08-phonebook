import React, { lazy, Suspense, Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// ops routes
import routes from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { authOperations } from './redux/auth';
// компоненты
import AppBar from './components/AppBar';
import Container from './components/Container';
import Spiner from './components/Spiner';

// стили

import './App.module.css';

const HomePage = lazy(() =>
  import('./views/HomeViews' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsViews' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginViews' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterViews' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Spiner />}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <PrivateRoute
                path={routes.contacts}
                exact
                component={ContactsPage}
                redirectTo={routes.logins}
              />
              <PublicRoute
                path={routes.logins}
                component={LoginPage}
                redirectTo={routes.contacts}
                restricted
              />

              <PublicRoute
                path={routes.register}
                redirectTo={routes.contacts}
                restricted
                component={RegisterPage}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
