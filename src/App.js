import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Header />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
