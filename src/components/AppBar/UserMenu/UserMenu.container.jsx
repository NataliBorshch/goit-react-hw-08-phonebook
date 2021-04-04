import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../../redux/auth';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
