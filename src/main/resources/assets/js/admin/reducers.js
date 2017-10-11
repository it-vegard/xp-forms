import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const NEW_FORM = {
  id: null,
  displayName: null,
  title: null,
  submitButton: null,
  successMessage: null,
  overrideSubmitUrl: null,
  overrideSubmitMethod: null,
  fields: [
    {
      label: null,
      id: null,
    },
    {
      label: null,
      id: null,
    },
  ],
};

const DEFAULT_APP_STATE = {
  editor: {
    isLoading: false,
    form: null,
  },
  formStudio: {
    isLoading: false,
    forms: [],
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
          isLoading: true,
          forms: [],
        },
      };
    case 'RECEIVE_FORMS':
      return {
        ...state,
        formStudio: {
          isLoading: false,
          forms: action.forms,
        },
      };
    default:
      return state;
  }
}

function formStudioReducer(state = { forms: [] }, action) {
  switch (action.type) {
    case 'CREATE_NEW':
      return state;
    case 'RECEIVE_FORMS':
      return [
        ...state,
        ...action.forms,
      ];
    default:
      return state;
  }
}

const FormAdminApp = combineReducers({
  forms: formStudioReducer,
  form: formReducer,
  app: appReducer,
});

export default FormAdminApp;
