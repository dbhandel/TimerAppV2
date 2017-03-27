const React = require('react');

const CountdownForm = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;
    this.refs.seconds.value = '';

    if(strSeconds.match(/^[0-9]*$/)) {
      let numSeconds = parseInt(strSeconds, 10);
      this.props.updateStateSeconds(numSeconds);
    } else {
      alert(`Please enter a number.`);
    }
    this.refs.seconds.value = '';
  },
  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit} ref='form' className='countdown-form'>
          <input type="text" placeholder="enter seconds" className="seconds-input" ref="seconds"/>
          <button className="button expanded">Start</button>
        </form>
     </div>
    );
  }
});

module.exports = CountdownForm
