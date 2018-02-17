import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const DateTimeFieldEditor = ({ id }) => (
  <Fragment>
    <span>Datetime</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

DateTimeFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default DateTimeFieldEditor;
