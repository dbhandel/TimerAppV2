const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    changeStatus: React.PropTypes.func.isRequired
  },

  //currying, when a function returns a function
  onChangeStatus(newStatus) {
    return () => {
      this.props.changeStatus(newStatus)
    };
  },
  render() {
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className='button secondary'  onClick={this.onChangeStatus('paused')} >Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className='primary button' onClick={this.onChangeStatus('started')} >Start</button>
      }
    };
    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='hollow button alert' id='stopped' onClick={() => this.props.changeStatus('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls
//with the clear button we take an inline approach on the click handler just to demonstrate it can be done that way
