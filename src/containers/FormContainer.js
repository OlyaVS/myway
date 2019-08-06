import { connect } from 'react-redux';
import Form from '../components/Form/Form';

import { addItem } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  handleSubmit: address => dispatch(addItem(address)),
});

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
