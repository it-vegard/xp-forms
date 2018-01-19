import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const xpFormRoot = document.getElementById('xpFormRoot');

ReactDOM.render(
  <App formId={xpFormRoot.dataset.formId} />,
  xpFormRoot,
);

export default App;
