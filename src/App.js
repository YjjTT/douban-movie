import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home/index'
import MovieDetail from './pages/movieDetail/index'
import More from './pages/more/index'
import Chart from './pages/chart/index'
import Top250 from './pages/top250/index'
import AllComments from './pages/allComments/index'
import AllReviews from './pages/allReviews/index'
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
						<Route exact path='/allComments/:id' component={AllComments}></Route>
						<Route exact path='/allReviews/:id' component={AllReviews}></Route>
						<Route exact path='/top250' component={Top250}></Route>
						<Route exact path='/chart' component={Chart}></Route>
						<Route exact path='/more' component={More}></Route>
						<Route exact path='/movieDetail/:id' component={MovieDetail}></Route>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
