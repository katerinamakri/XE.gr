import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {

		let toggleLocationsList = ( this.props.expandListData && this.props.isLoading === false ) ? "block" : "none";
		let displayLoading = this.props.isLoading ? "block" : "none";

		return (
			<div className="search-content">
				<form action="https://www.google.com/" method="get" className="form" >
					<div className="input-container">
						<i className="fas fa-search position-left"></i>
						<input type="text" name="query" className="search" value={ this.props.query } onChange={(event) => this.props.searchingFor(event.target.value)} />
						<i className="fas fa-microphone position-right"></i>
					</div>

					<p style={{ display: displayLoading }}>Loading...</p>

					<div className="list-container" style={{ display: toggleLocationsList }}>
						<ul>
						{this.props.locationsList.map((location,index) =>
							<li key={index} >
								<button type="button" onClick={() => this.props.handleSelectedLocation(location.name)}>{ location.name }</button>
							</li>
						)}
						</ul>
					</div>
					<div className="button-container">
						<button disabled={this.props.locationsList.length === 0}>Click to Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
