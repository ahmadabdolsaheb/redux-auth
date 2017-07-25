import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import createRoutes from './routes';

const routes = createRoutes();

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);



ReactDOM.render(<Provider store={store}>
  {routes}
</Provider>,
  document.getElementById('app')
);
