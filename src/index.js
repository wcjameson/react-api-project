import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/animals-reducer';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);


reportWebVitals();
