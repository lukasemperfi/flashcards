import React from 'react';
import ReactDOM from 'react-dom';
import 'simplebar/dist/simplebar.min.css';
import './index.css'
import 'antd/dist/antd.min.css'
import './monokai-sublime.min.css'

import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, {persistor} from './store';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>а
	</Provider>,
	document.getElementById('root')
);

