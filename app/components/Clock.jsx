const React = require('react');

const  Clock = React.createClass({
  getDefaultProps() {
    return {
      totalSeconds: 0
    };
  },
  propTypes: {
    totalSeconds:React.PropTypes.number
  },

  formatSeconds(totalSeconds) {
    let secs = (totalSeconds % 60)
    let mins = Math.floor(totalSeconds/60);
    mins < 10 ? mins = '0' + mins : mins.toString();
    secs < 10 ? secs = '0' + secs : secs.toString();
    return mins + ':' + secs;
  },

  render() {
    let {totalSeconds} = this.props;
    return (
      <div className className='clock-face'>
        <span ref='clockText' className='clock-text'>
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock
