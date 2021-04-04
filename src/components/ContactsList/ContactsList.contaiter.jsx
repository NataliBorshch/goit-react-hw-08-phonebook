import { connect } from 'react-redux';
import ContactsList from './ContacstList';
import { contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  items: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactsList);
