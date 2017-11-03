import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import FormEditor from './editor';
import FormAdminApp from './reducers';
import FormStudio from './studio';

const history = createHistory();

const store = createStore(
  FormAdminApp,
  compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history)),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  ),
);

const AdminApp = () => (
  <Provider store={store}>
    <ConnectedRouter
      history={history}
      basename="/admin/tool/no.vegard.enonic.xp.forms/main"
    >
      <Switch>
        <Route
          exact
          path="/admin/tool/no.vegard.enonic.xp.forms/main/"
          component={FormStudio}
        />
        <Route
          path="/admin/tool/no.vegard.enonic.xp.forms/main/editor/:id?"
          component={FormEditor}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default AdminApp;
