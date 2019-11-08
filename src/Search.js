import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {
		return (
			<div>
				<form method="get" className="form">
					<div className="input-container">
						<i className="fas fa-search position-left"></i>
						<input type="text" className="search"/>
						<i className="fas fa-microphone position-right"></i>
					</div>
					<div>
						<button>Click to Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
