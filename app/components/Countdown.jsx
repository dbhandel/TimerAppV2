const React = require('react');
const Clock = require('Clock')

const Countdown = React.createClass({
  render() {
    return (
      <div>
        <Clock totalSeconds={129}/>
        <p>Countdown component</p>
      </div>
    );
  }
});

module.exports = Countdown
