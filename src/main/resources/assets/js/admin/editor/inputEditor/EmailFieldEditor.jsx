import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const EmailFieldEditor = ({ id }) => (
  <Fragment>
    <span>Email</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

EmailFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default EmailFieldEditor;
