import React from 'react';

import Button from '../Button/Button.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const address = this.textInput.current.state.value;
    this.props.handleSubmit(address);
    console.log(`dispatch add item: ${address}`);
  }

  render() {
    return (
      <section className={`${this.props.className} form`}>
        <SectionHeader className="form__title visually-hidden" title="Address form" />
        <form className="form__body" action="" method="post" onSubmit={this.handleSubmit}>
          <TextInput
            classNameLabel="form__label visually-hidden"
            classNameInput="form__input"
            id="address"
            name="address"
            label="address"
            placeholder="Enter address"
            ref={this.textInput}
          />
          <Button className="form__submit" type="submit" title="submit" value="Add" />
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
