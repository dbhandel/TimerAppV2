const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  getInitialState() {
    return {
      seconds: 0,
      countdownStatus: 'stopped'
    };
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
        seconds: this.state.seconds + 1
      });
    }, 1000);

  },

  render() {
    let seconds = this.state.seconds;
    return (
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={seconds}/>
        <Controls countdownStatus={this.state.countdownStatus} changeStatus={this.changeStatus} app='timer'/>
      </div>
    );
  }
});

module.exports = Timer
