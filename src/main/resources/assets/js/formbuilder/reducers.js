import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const forms = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORM':
      return [
        ...state.concat(action.forms.filter(newForm =>
          state.findIndex(form => form.id === newForm.id) === -1)),
      ];
    default:
      return state;
  }
};

const FormsApp = combineReducers({
  forms,
  form: formReducer,
});

export default FormsApp;
