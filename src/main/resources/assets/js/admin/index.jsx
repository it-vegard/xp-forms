import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FormEditor from "./editor";
import FormAdminApp from "./reducers";

let store = createStore(FormAdminApp);

class AdminApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FormEditor/>
      </Provider>
    )
  }
}

export default AdminApp;