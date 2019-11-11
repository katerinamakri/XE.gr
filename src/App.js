import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';

class App extends Component {

	constructor(props) {
		super(props)


		this.state = {
			query:'',
			limit:this.isMobile(),
			language:this.detectLanguage(),
			locationsList:[],
			hasListData: false,
		}
	}

	fetchSearchResults = (query,language,limit) => {
		let apiUrl=`http://35.180.182.8/Search?keywords=${query}&language=${language}&limit=${limit}`;

		console.log(apiUrl)

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

			this.setState({
				locationsList: data.entries,
				hasListData: data.entries.length > 0,
			});
		})
		.catch((err) => {
         console.log(err)
      })
	}

	handleSelectedLocation = (location) => {

		this.setState({ query: location })
	}

	searchingFor = (term) => {

		// if (term.length >= 2) {			
			this.setState({ query: term }, () => {
				this.fetchSearchResults(this.state.query, this.state.language ,this.state.limit);
			});
		// }

		if (term.length === 0) {
			this.setState ({ 
				locationsList:[],
				hasListData: false
			});
		}
	}

	isMobile = () => {
	   if (window.innerWidth <= 425 && window.innerHeight <= 823) {
			return 10
	   } else {
			return 20
	   }
	}

	detectLanguage = () => {
		if (navigator.language === 'el-GR')
			return 'el'
		else if (navigator.language === 'en-US') {
			return 'en'
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
					<Search
						hasListData={this.state.hasListData}
						locationsList={this.state.locationsList} 
						handleSelectedLocation={this.handleSelectedLocation}
						searchingFor={this.searchingFor}
						query={this.state.query}
					/>
				</div>
			</div>
		);
   }
}

export default App;
