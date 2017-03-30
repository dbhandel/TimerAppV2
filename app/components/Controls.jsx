const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    changeStatus: React.PropTypes.func.isRequired,
    app: React.PropTypes.string.isRequired
  },

  //currying, when a function returns a function
  onChangeStatus(newStatus) {
    return () => {
      this.props.changeStatus(newStatus)
    };
  },
  render() {
    let {countdownStatus, app} = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus === 'stopped' && app === 'timer') {
        return <button className='button primary'  onClick={this.onChangeStatus('started')} >Start</button>
     } else if (countdownStatus === 'started' && app === 'timer') {
        return <button className='button alert'  onClick={this.onChangeStatus('stopped')} >Stop</button>
     }
      if(countdownStatus === 'started' && app === 'countdown') {
        return <button className='button secondary'  onClick={this.onChangeStatus('paused')} >Pause</button>
      } else if (countdownStatus === 'paused' && app === 'countdown') {
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
