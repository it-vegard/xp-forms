import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import FormEditor from './editor';
import FormAdminApp from './reducers';
import { loadForms } from './actions';
import FormEditorCss from '../../scss/admin/editor/form-editor.scss';

const store = createStore(
  FormAdminApp,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
