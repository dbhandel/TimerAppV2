const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState() {
    return {
      seconds: 0,
      countdownStatus: 'stopped'
    };
  },

  setCountdown(seconds) {
    if(seconds && typeof seconds === 'number') {
      this.setState({
        seconds,
        countdownStatus: 'started'
      });
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if(prevState.countdownStatus !== this.state.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          clearInterval(this.timer);
          break;
        case 'stopped':
          clearInterval(this.timer);
          this.setState({
            seconds: 0
          });
          break;
        default:
      }
    }
  },

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds > 0 ? this.state.seconds - 1 : this.state.seconds
      });
    }, 1000);
  },

  render() {
    let seconds = this.state.seconds;
    return (
      <div className='countdown'>
        <Clock totalSeconds={seconds}/>
        <CountdownForm updateStateSeconds={this.setCountdown}/>
        <Controls countdownStatus={this.state.countdownStatus}/>
      </div>
    );
  }
});

module.exports = Countdown
