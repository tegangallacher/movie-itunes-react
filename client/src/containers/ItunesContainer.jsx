var React = require('react');
var ItunesSelector = require('../components/ItunesSelector.jsx');
var ItunesDetail = require('../components/ItunesDetail.jsx');

var url;

var ItunesContainer = React.createClass({
  getInitialState: function () {
    return { films: [], focusFilm: null };
  },



  componentDidMount: function(callback) {
    var url = "https://itunes.apple.com/gb/rss/topmovies/limit=25/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status !== 200){
        return;
      }
      var data = JSON.parse(request.responseText);
      console.log(data)
      this.setState({ films : data.feed.entry });
    }.bind(this);
    request.send();
  },

  setFocusFilm: function(film) {
    this.setState({ focusFilm: film })
  },

  render: function () {
    return (
      <div>
      <ItunesSelector films={this.state.films} selectFilm={this.setFocusFilm}/>
      <ItunesDetail film={this.state.focusFilm}/>
      </div>
      );
  }
});


module.exports = ItunesContainer;