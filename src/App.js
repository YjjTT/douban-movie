import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home/index'
import MovieDetail from './pages/movieDetail/index'
import More from './pages/more/index'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/more' component={More}></Route>
						<Route exact path='/movieDetail/:id' component={MovieDetail}></Route>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
