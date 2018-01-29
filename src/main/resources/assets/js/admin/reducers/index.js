import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import formsReducer from './formsReducer';
import appReducer from './appReducer';
import adminReducer from './adminReducer';

const FormAdminApp = combineReducers({
  forms: formsReducer,
  form: formReducer,
  app: appReducer,
  routing: routerReducer,
  admin: adminReducer,
});

export default FormAdminApp;
