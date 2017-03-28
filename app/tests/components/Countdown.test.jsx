const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Countdown = require('Countdown');

describe('Countdown', function() {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('setCountdown', function() {
    it('should set state to started and begin the countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(1);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        done();
      }, 1001);
    });

    it('should not countdown to negative numbers', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(1);

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        done();
      }, 2001);
    });

    it('should pause the countdown when the pause button is clicked', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(3);
      //countdown.setState({countdownStatus: 'paused'});
      countdown.changeStatus('paused');
      setTimeout(() => {
        expect(countdown.state.seconds).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 2001);
    });

    it('should stop the countdown and reset the count to zero when the stop button is clicked', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.setCountdown(3);
      countdown.changeStatus('stopped');

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
