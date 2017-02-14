var React = require('react');

var ItunesDetail = function (props) {
  if (!props.film) {
    return <h4></h4>
  } 
  return (
    <div>
    <p>{props.film.summary.label}</p>
    <img src={props.film["im:image"]["2"].label}></img>
    </div>
  )
};

module.exports = ItunesDetail;