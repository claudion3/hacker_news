import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SWRConfig } from 'swr';

const fetcher = async (input, init) => {
	const response = await fetch(input, init);
	return response.json();
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<SWRConfig value={{ fetcher }}>
				<App />
			</SWRConfig>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
