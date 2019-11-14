import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import debounce from 'lodash.debounce';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			query: '',
			limit: this.isMobile(),
			language: this.detectLanguage(),
			locationsList: [],
			expandListData: false,
			isLoading: false
		}

		this.callDebounce = debounce(this.delayedFetch, 1000);
	}

	fetchSearchResults = (query,language,limit) => {
		let apiUrl=`http://35.180.182.8/Search?keywords=${query}&language=${language}&limit=${limit}`;

		this.setState({isLoading:true})

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
				expandListData: data.entries.length > 0,
				isLoading: false
			});
		})
		.catch((err) => {
			console.log(err)
		})
	}

	handleSelectedLocation = (location) => {
		this.setState({ 
			query: location,
			expandListData: false
		})
	}

	searchingFor = (term) => {	
		this.setState({query: term}, () => {
			this.callDebounce();
		});

		if (term.length === 0) {
			this.setState ({ 
				locationsList: [],
				expandListData: false,
				isLoading: false
			});
		}
	}

	delayedFetch = () => {
		if (this.state.query.length <= 2) {	return } 
		this.fetchSearchResults(this.state.query, this.state.language ,this.state.limit); 
	}

	isMobile = () => {
		if (window.innerWidth <= 500 && window.innerHeight <= 768) {
			return 10
		} else {
			return 20
		}
	}

	detectLanguage = () => {
		if (navigator.language === 'el-GR')
			return 'el'
		else {
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
						expandListData={this.state.expandListData}
						locationsList={this.state.locationsList} 
						handleSelectedLocation={this.handleSelectedLocation}
						searchingFor={this.searchingFor}
						query={this.state.query}
						isLoading={this.state.isLoading}
					/>
				</div>
			</div>
		);
	}
}

export default App;