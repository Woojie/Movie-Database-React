import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
(<HashRouter>
<Provider store={store}>
  <App />
</Provider>
</HashRouter>)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
