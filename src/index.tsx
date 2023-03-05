import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { App } from './app/App';
import { store } from './store/store';

initializeApp({
	apiKey: 'AIzaSyCekvADkTcxKUJcuPS6dJ2fPgLpM4huJak',
	authDomain: 'vmesto-project.firebaseapp.com',
	databaseURL: 'https://vmesto-project-default-rtdb.firebaseio.com',
	projectId: 'vmesto-project',
	storageBucket: 'vmesto-project.appspot.com',
	messagingSenderId: '577881227987',
	appId: '1:577881227987:web:db37558d37cd2fa3808a26',
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
