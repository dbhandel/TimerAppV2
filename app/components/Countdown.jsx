const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({

  getInitialState() {
    return {
      seconds: 0
    };
  },

  setCountdown(seconds) {
    if(seconds && typeof seconds === 'number') {
      this.setState({
        seconds
      });
    }
  },

  // componentDidUpdate(prevProps, prevState) {
  //   if(this.prevState.seconds !== this.state.seconds) {
  //     console.log('component did update');
  //   }
  // },

  render() {
    let seconds = this.state.seconds;
    return (
      <div className='countdown'>
        <Clock totalSeconds={seconds}/>
        <CountdownForm updateStateSeconds={this.setCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown
