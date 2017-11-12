import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const xpFormRoot = document.getElementById('xpFormRoot');

ReactDOM.render(
  <App formId={xpFormRoot.dataset.formid} />,
  xpFormRoot,
);

export default App;
