import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../Form.module.css';
import { authOperations } from '../../../redux/auth';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.title}>
          Name
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={this.handleChange}
            name="name"
            className={styles.input}
            required
          />
        </label>
        <label className={styles.title}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={styles.title}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Sing in
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegistrationForm);
