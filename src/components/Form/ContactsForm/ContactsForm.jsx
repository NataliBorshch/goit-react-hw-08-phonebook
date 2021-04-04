import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../Form.module.css';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const allNumber = this.props.contacts.map(item => item.number);
    const alreadyHaveContact = allNumber.includes(this.state.number);
    if (alreadyHaveContact) {
      return alert(`phone number  is  already in contacts`);
    }
    this.props.addContacts({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={styles.box_form}>
        <h1>Please write number your friends</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.title}>
            Name
            <input
              className={styles.input}
              type="name"
              name="name"
              value={this.state.name}
              placeholder="Enter name"
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={styles.title}>
            Pnone
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              placeholder="Enter number"
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContacts: item => dispatch(contactsOperations.addContacts(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
