import React from 'react';
import FieldTypes from '../../../admin/editor/FieldTypes';
import CheckboxInput from './CheckboxInput';
import CheckboxGroup from './CheckboxGroup';
import DateInput from './DateInput';
import DateTimeInput from './DateTimeInput';
import EmailInput from './EmailInput';
import NumberInput from './NumberInput';
import PasswordInput from './PasswordInput';
import RadioButtonInput from './RadioButtonInput';
import RangeInput from './RangeInput';
import SearchInput from './SearchInput';
import TelInput from './TelInput';
import TextInput from './TextInput';
import TimeInput from './TimeInput';
import URLInput from './URLInput';

const InputField = ({ field }) => {
  switch (field.type) {
    case FieldTypes.CHECKBOX:
      return <CheckboxInput {...field} />;
    case FieldTypes.CHECKBOX_GROUP:
      return <CheckboxGroup {...field} />;
    case FieldTypes.DATE:
      return <DateInput field={field} />;
    case FieldTypes.DATETIME:
      return <DateTimeInput field={field} />;
    case FieldTypes.EMAIL:
      return <EmailInput field={field} />;
    case FieldTypes.NUMBER:
      return <NumberInput field={field} />;
    case FieldTypes.PASSWORD:
      return <PasswordInput field={field} />;
    case FieldTypes.RADIO:
      return <RadioButtonInput field={field} />;
    case FieldTypes.RANGE:
      return <RangeInput field={field} />;
    case FieldTypes.SEARCH:
      return <SearchInput field={field} />;
    case FieldTypes.TEL:
      return <TelInput field={field} />;
    case FieldTypes.TEXT:
      return <TextInput field={field} />;
    case FieldTypes.TIME:
      return <TimeInput field={field} />;
    case FieldTypes.URL:
      return <URLInput field={field} />;
    default:
      return <TextInput field={field} />;
  }
};

InputField.displayName = 'InputField';

export default InputField;
