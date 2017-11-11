import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import PropTypes from 'prop-types';
import FormsApp from './reducers';
import FormWrapper from './form';

const store = createStore(
  FormsApp,
  compose(applyMiddleware(thunkMiddleware)),
);

const App = props => (
  <Provider store={store}>
    <FormWrapper formId={props.formId} />
  </Provider>
);

App.propTypes = {
  formId: PropTypes.string,
};

export default App;
