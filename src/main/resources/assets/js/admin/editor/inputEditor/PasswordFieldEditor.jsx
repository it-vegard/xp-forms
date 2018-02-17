import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Password from '../fields/TextInput';

const PasswordFieldEditor = ({ id }) => (
  <Fragment>
    <span>Password</span>
    <Password
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

PasswordFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default PasswordFieldEditor;
