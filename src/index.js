import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Update My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();