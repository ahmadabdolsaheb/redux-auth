import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import createRoutes from './routes';

const routes = createRoutes();



ReactDOM.render(
  routes,
  document.getElementById('app')
);
