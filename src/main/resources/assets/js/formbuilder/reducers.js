import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const forms = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORM':
      if (state.findIndex(form => form.id === action.id) !== -1) {
        return state.map((form) => {
          if (form.id !== action.id) {
            return form;
          }
          return {
            ...form,
            config: action.form,
          };
        });
      }
      return [
        ...state,
        {
          id: action.id,
          config: action.form,
        },
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
