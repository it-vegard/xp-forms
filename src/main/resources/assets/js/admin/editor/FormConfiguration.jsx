import React from 'react';
import { FieldArray } from 'redux-form';
import InputFieldEditor from './InputFieldEditor';
import TextInput from './fields/TextInput';
import HtmlInput from './fields/HtmlInput';
import FormEditorNavigation from './FormEditorNavigation';
import { textToName } from './../util/StringUtil';

const fieldsets = [
  'Basic settings',
  'Fields',
  'Advanced settings',
];

const FormEditor = () => (
  <div>
    <FormEditorNavigation items={fieldsets} />
    <h2
      id={textToName(fieldsets[0])}
      className="xpFormEditorConfigurationHeading"
    >
      {fieldsets[0]}
    </h2>
    <TextInput
      id="title"
      label="Title"
      placeholder="Optional title field"
      required={false}
    />
    <TextInput
      id="submitButton"
      label="Submit button text"
      placeholder="What do you call the action of submitting?"
      required
    />
    <HtmlInput
      id="successMessage"
      label="Success message"
      placeholder="What response should the user get after submitting?"
      required
    />
    <h2
      id={textToName(fieldsets[1])}
      className="xpFormEditorConfigurationHeading"
    >
      {fieldsets[1]}
    </h2>
    <FieldArray component={InputFieldEditor} name="fields" />
    <h2
      id={textToName(fieldsets[2])}
      className="xpFormEditorConfigurationHeading"
    >
      {fieldsets[2]}
    </h2>
    <TextInput
      id="overrideSubmitUrl"
      label="Override URL to submit to"
      required
    />
    <TextInput
      id="overrideSubmitMethod"
      label="Override submit method"
      required
    />
  </div>
);

export default FormEditor;
