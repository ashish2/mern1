import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './store';

console.log("store in index.jsx " , store);

ReactDOM.render( 
		(	
		<Provider store={store}>
			<App />
		</Provider>
		), 
	document.getElementById("root"));



