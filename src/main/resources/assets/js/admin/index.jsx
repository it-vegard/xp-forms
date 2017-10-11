import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import FormEditor from './editor';
import FormAdminApp from './reducers';
import { loadForms } from './actions';

const store = createStore(
  FormAdminApp,
  compose(
    applyMiddleware(thunkMiddleware),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  ),
);

class AdminApp extends React.Component {
  componentWillMount() {
    store.dispatch(loadForms());
  }

  render() {
    return (
      <Provider store={store}>
        <FormEditor />
      </Provider>
    );
  }
}

export default AdminApp;
