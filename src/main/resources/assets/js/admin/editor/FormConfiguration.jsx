import React from 'react';
import InputFieldEditor from './InputFieldEditor';
import TextInput from "./fields/TextInput";
import HtmltInput from "./fields/HtmlInput";
import FormEditorNavigation from "./FormEditorNavigation"
import { textToName } from './../util/StringUtil';

const fieldsets = [
  "Basic settings",
  "Fields",
  "Advanced settings"
]

class FormEditor extends React.Component {

  render() {
    return (
      <div>
        <FormEditorNavigation items={fieldsets}/>
        <h2 id={textToName(fieldsets[0])} className="xpFormEditorConfigurationHeading">{fieldsets[0]}</h2>
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
          required={true}
        />
        <HtmltInput
          id="successMessage"
          label="Success message"
          placeholder="What response should the user get after submitting?"
          required={true}
        />
        <h2 id={textToName(fieldsets[1])} className="xpFormEditorConfigurationHeading">{fieldsets[1]}</h2>
        <InputFieldEditor/>
        <h2 id={textToName(fieldsets[2])} className="xpFormEditorConfigurationHeading">{fieldsets[2]}</h2>
        <TextInput
          id="overrideSubmitUrl"
          label="Override URL to submit to"
          required={true}
        />
        <TextInput
          id="overrideSubmitMethod"
          label="Override submit method"
          required={true}
        />
      </div>
    )
  }

}

export default FormEditor;