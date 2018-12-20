import React from 'react';
import ReactDOM from 'react-dom';

const Title = 'Update My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Title />,
  document.getElementById('app')
);

module.hot.accept();