import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/contacts';
// components
import ContactsForm from '../components/Form/ContactsForm';
import Modal from '../components/Modal';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';
// styles icon
import { ReactComponent as IconClose } from '../img/cancel.svg';
import styles from '../App.module.css';

class Contacts extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  openModal = () => {
    this.setState({ showModal: true });
  };
  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className={styles.page_contacts}>
        <h1>PhoneBook</h1>
        <div className={styles.list_filter}>
          <Filter />

          <button
            type="buttom"
            onClick={this.openModal}
            className={styles.button}
          >
            Add to Contacts
          </button>
        </div>
        {this.state.showModal && (
          <Modal onClose={this.onCloseModal}>
            <ContactsForm />
            <button
              type="button"
              className={styles.btn_close_modal}
              onClick={this.onCloseModal}
            >
              <IconClose fill="inherit" />
            </button>
          </Modal>
        )}
        <ContactsList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
