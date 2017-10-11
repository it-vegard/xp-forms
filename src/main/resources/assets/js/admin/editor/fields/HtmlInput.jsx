import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

const HtmlInput = (props) => {
  const className = concatClassNames(
    'xpFormInput xpFormHtmlInput',
    (!props.label ? 'noLabel ' : null),
    props.className,
  );

  return (
    <label
      htmlFor={props.id || textToName(props.label)}
      className="xpFormEditorLabel"
    >
      {
        props.label &&
        <span>{props.label}</span>
      }
      <Field
        component="textarea"
        id={props.id || textToName(props.label)}
        name={props.id || textToName(props.label)}
        placeholder={props.placeholder}
        className={className}
        required={props.required}
      />
    </label>
  );
};

HtmlInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default HtmlInput;
