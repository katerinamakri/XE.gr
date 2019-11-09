import React, { Component } from 'react';
import './App.css';

class Search extends Component {

	render() {
		return (
			<div className="search-content">
				<form method="get" className="form">
					<div className="input-container">
						{/*<i className="fas fa-search position-left"></i>*/}
						<input type="text" className="search"/>
						{/*<i className="fas fa-microphone position-right"></i>*/}
					</div>
					<div className="list-container">
						<ul>
							<li>Glyfada Golf Club of Athens, Glyfada,Athens area,Athens Coast,Palaio Faliro</li>
							<li>National Archaeological Museum of Athens, Athens area,Palaio Faliro,Acropolis,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Glyfada Golf Club of Athens, Glyfada,Athens area,Athens Coast,Palaio Faliro</li>
							<li>National Archaeological Museum of Athens, Athens area,Palaio Faliro,Acropolis,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Glyfada Golf Club of Athens, Glyfada,Athens area,Athens Coast,Palaio Faliro</li>
							<li>National Archaeological Museum of Athens, Athens area,Palaio Faliro,Acropolis,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>
							<li>Athens Concert Hall (Megaron Moussikis), Kaisariani,Zografos,Athens area,Palaio Faliro,Athens, Greece</li>											
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
