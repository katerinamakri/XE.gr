import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';

class App extends Component {

   render() {
		return (
			<div className="app">
				<div className="banner-container">
					<p>Banner space</p>
				</div>
				<div className="img-container">
					<img src="https://www.xe.gr/images/xe_home/xeClassic.png" alt="xe-logo" />
				</div>
				<div className="search-container">
					<p>What place are you looking for?</p>
					<Search />
				</div>
			</div>
		);
   }
}

export default App;
