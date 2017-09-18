import React from 'react';
import FormHeader from "./FormHeader";
import FormConfiguration from './FormConfiguration';
import FormEditorCss from '../../../scss/admin/editor/form-editor.scss';

class FormEditor extends React.Component {

  render() {
    return (
      <section id="xpFormsEditor">
        <form>
          <FormHeader/>
          <FormConfiguration/>
        </form>
      </section>
    )
  }

}

export default FormEditor;