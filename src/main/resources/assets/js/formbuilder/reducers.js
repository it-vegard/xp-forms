import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const formBuilder = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_FORM':
      return state;
    default:
      return state;
  }
};

const FormsApp = combineReducers({
  formBuilder,
  form: formReducer,
});

export default FormsApp;
