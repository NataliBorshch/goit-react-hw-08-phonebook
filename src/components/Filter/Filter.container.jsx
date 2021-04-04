import { connect } from 'react-redux';
import Filter from './Filter';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  getFilter: event =>
    dispatch(contactsActions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
