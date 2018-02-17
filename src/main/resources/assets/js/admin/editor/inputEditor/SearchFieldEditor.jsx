import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const SearchFieldEditor = ({ id }) => (
  <Fragment>
    <span>Search input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

SearchFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default SearchFieldEditor;
