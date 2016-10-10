var React = require('react');

var panelStyle = {
	backgroundColor: '#FFE693'
}

var Saved = React.createClass({

	getInitialState: function(){
		return {
			savedArticles: []
		}
	},

	clickToDelete: function(result){
		this.props.deleteArticle(result);

	},

	componentWillReceiveProps: function(nextProps){
		var that = this;
		console.log(nextProps);
		var myResults = nextProps.savedArticles.map(function(search, i){
			var boundClick = that.clickToDelete.bind(that, search);
			return <div className="list-group-item row" key={i}>
			<div className="col-md-9">
			<a href={search.url} target="_blank">{search.title}</a>
			<br />{search.date}
			</div><div className="col-md-3">
			<button type="button" className="btn" style={{}} onClick={boundClick}>Delete</button>
			</div>
			</div>
		});

		this.setState({savedArticles: myResults});
	},

	render: function(){

		return(

			<div className="panel">
				<div className="panel-heading" style={panelStyle}>
					<h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">

					{this.state.savedArticles}
				</div>
			</div>

		)
	}
});

module.exports = Saved;