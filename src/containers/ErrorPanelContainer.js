import { connect } from 'react-redux';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel.jsx';

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

const ErrorPanelContainer = connect(mapStateToProps)(ErrorPanel);
export default ErrorPanelContainer;
