import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import formsReducer from './formsReducer';
import appReducer from './appReducer';

const FormAdminApp = combineReducers({
  forms: formsReducer,
  form: formReducer,
  app: appReducer,
  routing: routerReducer,
});

export default FormAdminApp;
