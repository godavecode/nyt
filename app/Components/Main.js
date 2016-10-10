var React = require('react');
var axios = require('axios');
var $ = require('jquery');


var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

var helpers = require('./utils/helpers.js');

var Main = React.createClass({

	getInitialState: function(){
		return {
			subject: "",
			startYear: 0,
			endYear: 0,
			results: 0,
		}
	},	

	setTerm: function(sub, startY, endY){
		this.setState({
			subject: sub,
			startY: startY,
			endY: endY
		})
	},

	render: function(){
		return(
				<div className="container">
	
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
					</div>
					<div className="row">
						<Search setParameters={this.setParameters} />
					</div>
					<div className="row">
						<Results />
					</div>
					<div className="row">
						<Saved />
					</div>

				</div>
			)
	}
});

module.exports = Main;