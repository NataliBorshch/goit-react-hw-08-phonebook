import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import styles from '../Form.module.css';

class LoginsForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.title}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.title}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Log in
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.logIn(data)),
});

export default connect(null, mapDispatchToProps)(LoginsForm);
