import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {

		let toggleLocationsList = this.props.hasListData ? "block" : "none";
		return (
			<div className="search-content">
				<form action={ "https://www.google.com/"+ this.props.selectedLocation } method="get" className="form" >
					<div className="input-container">
						<i className="fas fa-search position-left"></i>
						<input type="text" name="query" className="search" value={ this.props.query } onChange={(event) => this.props.searchingFor(event.target.value)} />
						<i className="fas fa-microphone position-right"></i>
					</div>
					<div className="list-container" style={{ display: toggleLocationsList }}>
						<ul>
						{this.props.locationsList.map((location,index) =>
							<li key={index} value={location.name}>
								<button type="button" onClick={() => this.props.handleSelectedLocation(location.name)}>{ location.name }</button>
							</li>
						)}
						</ul>
					</div>
					<div className="button-container">
						<button>Click to Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
