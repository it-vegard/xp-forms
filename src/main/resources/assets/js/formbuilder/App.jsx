import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import PropTypes from 'prop-types';
import FormsApp from './reducers';
import XpForm from './form';

const store = createStore(
  FormsApp,
  compose(applyMiddleware(thunkMiddleware)),
);

const App = props => (
  <Provider store={store}>
    <XpForm initialValues={props.initialValues} />
  </Provider>
);

App.propTypes = {
  initialValues: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.shape({
      id: PropTypes.string,
      displayName: PropTypes.string,
      title: PropTypes.string,
      submitButton: PropTypes.string,
      successMessage: PropTypes.string,
      overrideSubmitMethod: PropTypes.string,
      overrideSubmitUrl: PropTypes.string,
      fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string,
      })),
    }),
  }),
};

export default App;
