import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const NEW_FORM = {
  id: "new-form",
  displayName: "New form",
  title: "Hello World",
  submitButton: "Submit",
  successMessage: "Thanks for submitting",
  overrideSubmitUrl: "http://localhost:8080",
  overrideSubmitMethod: "GET",
  fields: [
    {
      label: "Label",
      id: "label"
    },
    {
      label: "Name",
      id: "name"
    }
  ]
};

function editor(state = NEW_FORM, action) {
 switch (action.type) {
   case "CREATE_NEW" :
     return NEW_FORM;
   default :
     return state;
 }
}

function formStudio(state = [ NEW_FORM.id ], action) {
  switch (action.type) {
    case "CREATE_NEW" :
      return [
        ...state,
        NEW_FORM.id
      ];
    default:
      return state;
  }
}

const FormAdminApp = combineReducers({
  editor,
  formStudio,
  form: formReducer
});

export default FormAdminApp;