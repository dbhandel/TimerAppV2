const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render() {
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className='button secondary'>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className='primary button'>Start</button>
      }
    };
    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='hollow button alert'>Clear</button>
      </div>
    );
  }
});

module.exports = Controls

//<button className='alert button'>Stop</button>
