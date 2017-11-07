import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const NEW_FORM = {
  id: null,
  displayName: null,
  title: null,
  submitButton: null,
  successMessage: null,
  overrideSubmitUrl: null,
  overrideSubmitMethod: null,
  fields: [],
};

const DEFAULT_APP_STATE = {
  editor: {
    isLoading: false,
    form: null,
  },
  formStudio: {
    isLoading: false,
    forms: [],
    selectedForms: [],
  },
};

function appReducer(state = DEFAULT_APP_STATE, action) {
  switch (action.type) {
    case 'CREATE_FORM':
      return {
        ...state,
        editor: {
          isLoading: false,
          form: NEW_FORM,
        },
      };
    case 'LOADING_FORM':
      return {
        ...state,
        editor: {
          isLoading: true,
          form: null,
        },
      };
    case 'RECEIVE_FORM':
      return {
        ...state,
        editor: {
          isLoading: false,
          form: action.form,
        },
      };
    case 'LOADING_FORMS':
      return {
        ...state,
        formStudio: {
          ...state.formStudio,
          isLoading: true,
          forms: [],
        },
      };
    case 'RECEIVE_FORMS':
      return {
        ...state,
        formStudio: {
          ...state.formStudio,
          isLoading: false,
          forms: action.forms,
        },
      };
    case 'CLOSE_FORM':
      return {
        ...state,
        editor: {
          isLoading: false,
          form: null,
        },
      };
    case 'SELECT_FORM':
      return {
        ...state,
        formStudio: {
          ...state.formStudio,
          selectedForms: [
            ...state.formStudio.selectedForms,
            action.id,
          ],
        },
      };
    case 'UNSELECT_FORM':
      return {
        ...state,
        formStudio: {
          ...state.formStudio,
          selectedForms: state.formStudio.selectedForms.filter(item => action.id !== item),
        },
      };
    case 'DELETED_FORM':
      return {
        ...state,
        formStudio: {
          ...state.formStudio,
          forms: state.formStudio.forms.filter(item => action.id !== item),
          selectedForms: state.formStudio.selectedForms.filter(item => action.id !== item),
        },
      };
    default:
      return state;
  }
}

function formStudioReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_FORM':
      return state;
    case 'RECEIVE_FORMS':
      return [
        ...state,
        ...action.forms,
      ];
    case 'DELETED_FORM':
      return state.filter(item => action.id !== item.id);
    default:
      return state;
  }
}

const FormAdminApp = combineReducers({
  forms: formStudioReducer,
  form: formReducer,
  app: appReducer,
  routing: routerReducer,
});

export default FormAdminApp;
