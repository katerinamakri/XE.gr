import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			query:''
		}
	}

	componentDidMount() {
		this.fetchSearchResults();
	}

	fetchSearchResults = () => {
		let limit;

		const isMobile = this.isMobile();

		console.log(isMobile)

		if ( isMobile === true ) {
			limit = 10;
		} else {
			limit = 20;
		}

		let apiUrl=`http://35.180.182.8/Search?keywords=athens&language=en&limit=${limit}`;

		fetch(apiUrl, {
			method:'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data)
		})
	}

	isMobile = () => {
		console.log(window.innerWidth)
	   if (window.innerWidth <= 425 && window.innerHeight <= 823) {
	     return true;
	   } else {
	     return false;
	   }
	}

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
