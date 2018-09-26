
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './firebase/firebase';

const Index = () => {
	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}


ReactDOM.render(
	<Provider store ={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL || ''}>
			<Index />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));


{/* registerServiceWorker(); */}

