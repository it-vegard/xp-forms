import React from 'react';
import FieldTypes from '../FieldTypes';
import CheckboxFieldEditor from './CheckboxFieldEditor';
import CheckboxGroupEditor from './CheckboxGroupEditor';
import DateFieldEditor from './DateFieldEditor';
import DateTimeFieldEditor from './DateTimeFieldEditor';
import EmailFieldEditor from './EmailFieldEditor';
import NumberFieldEditor from './NumberFieldEditor';
import PasswordFieldEditor from './PasswordFieldEditor';
import RadioButtonsFieldEditor from './RadioButtonsFieldEditor';
import RangeFieldEditor from './RangeFieldEditor';
import SearchFieldEditor from './SearchFieldEditor';
import TelFieldEditor from './TelFieldEditor';
import TextFieldEditor from './TextFieldEditor';
import TimeFieldEditor from './TimeFieldEditor';
import UrlFieldEditor from './UrlFieldEditor';

const InputEditor = ({ id, field }) => {
  const { type } = field;
  switch (type) {
    case FieldTypes.CHECKBOX:
      return <CheckboxFieldEditor id={id} field={field} />;
    case FieldTypes.CHECKBOX_GROUP:
      return <CheckboxGroupEditor id={id} field={field} />;
    case FieldTypes.DATE:
      return <DateFieldEditor id={id} field={field} />;
    case FieldTypes.DATETIME:
      return <DateTimeFieldEditor id={id} field={field} />;
    case FieldTypes.EMAIL:
      return <EmailFieldEditor id={id} field={field} />;
    case FieldTypes.NUMBER:
      return <NumberFieldEditor id={id} field={field} />;
    case FieldTypes.PASSWORD:
      return <PasswordFieldEditor id={id} field={field} />;
    case FieldTypes.RADIO:
      return <RadioButtonsFieldEditor id={id} field={field} />;
    case FieldTypes.RANGE:
      return <RangeFieldEditor id={id} field={field} />;
    case FieldTypes.SEARCH:
      return <SearchFieldEditor id={id} field={field} />;
    case FieldTypes.TEL:
      return <TelFieldEditor id={id} field={field} />;
    case FieldTypes.TEXT:
      return <TextFieldEditor id={id} field={field} />;
    case FieldTypes.TIME:
      return <TimeFieldEditor id={id} field={field} />;
    case FieldTypes.URL:
      return <UrlFieldEditor id={id} field={field} />;
    default:
      return <TextFieldEditor id={id} field={field} />;
  }
};

export default InputEditor;
