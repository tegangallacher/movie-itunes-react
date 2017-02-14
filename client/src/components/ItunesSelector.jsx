var React = require('react');

var ItunesSelector = React.createClass({
  getInitialState: function() {
    return { selectedIndex: undefined };
  },

  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.selectFilm(this.props.films[newIndex]);
    console.log(newIndex)
  },
  render: function () {
    var options = this.props.films.map(function(film, index) {
      return <option value={index} key={index}>{film["im:name"].label}</option>
    });
    return (
      <select id="films" value={this.state.selectedIndex} onChange={this.handleChange}>
      <option>Select a Film</option>
        {options}
      </select>
    );
  }


});

module.exports = ItunesSelector;