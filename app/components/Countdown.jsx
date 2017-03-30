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

  changeStatus(status) {
    this.setState({
      countdownStatus: status
    });
  },

  componentDidUpdate(prevProps, prevState) {
    if(prevState.countdownStatus !== this.state.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':

          this.setState({
            seconds: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  },

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  },

  startTimer() {

    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds > 0 ? this.state.seconds - 1 : this.state.seconds
      });
      if(this.state.seconds === 0) {
        this.setState({
          countdownStatus: 'stopped'
        })
      }
    }, 1000);

  },

  renderControlArea() {
    if(this.state.countdownStatus === 'stopped') {
      return (
        <CountdownForm updateStateSeconds={this.setCountdown} app='countdown'/>
      );
    }
    return (
      <Controls countdownStatus={this.state.countdownStatus} changeStatus={this.changeStatus} app='countdown'/>
    );
  },

  render() {
    let seconds = this.state.seconds;
    return (
      <div className='countdown'>
        <h1 className='page-title'>Countdown App</h1>
        <Clock totalSeconds={seconds}/>
        <div className='control-area'>
          {this.renderControlArea()}
        </div>
      </div>
    );
  }
});

module.exports = Countdown
