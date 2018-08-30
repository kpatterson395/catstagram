
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Header from './components/Header';
import CatGallery from './components/CatGallery';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
	return (
		<div>
			<Header />
			<CatGallery />
		</div>
	)
}


ReactDOM.render(
	<Provider store ={store}>

			<Index />
		
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();


