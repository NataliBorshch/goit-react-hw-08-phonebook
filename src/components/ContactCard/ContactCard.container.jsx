import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import ContactCard from './ContactCard';

const mapDispatchToProps = dispatch => ({
  onDelite: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(null, mapDispatchToProps)(ContactCard);
