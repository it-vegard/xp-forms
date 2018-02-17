import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName } from '../util/StringUtil';


const SelectInput = ({ id, options }) => (
  <label
    className="xpFormEditorLabel"
    htmlFor={id}
  >
    <span>Select input type</span>
    <Field
      className="xpFormInput xpFormSelect"
      component="input"
      id={id}
      list={`${id}-options`}
      name={id}
      type="search"
    />
    <datalist id={`${id}-options`}>
      {options.map(option => (
        <option
          key={textToName(option)}
          value={option}
        />
      ))}
    </datalist>
  </label>
);

SelectInput.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default SelectInput;
