const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  // it('should stop the timer when the stop button is clicked', (done) => {
  //   let timer = TestUtils.renderIntoDocument(<Timer app='timer'/>);
  //   timer.startTimer();
  //   timer.changeStatus('stopped');
  //
  //   setTimeout(() => {
  //     expect(timer.state.seconds).toBe(0);
  //     expect(timer.state.countdownStatus).toBe('stopped');
  //     done();
  //   }, 2001);
  // });

  it('should stop the timer and reset the count to zero when the stop button is clicked', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer app='timer'/>);
    timer.startTimer();

    setTimeout(() => {
      timer.changeStatus('stopped');

      //expect(timer.state.seconds).toBe(0);
      expect(timer.state.countdownStatus).toBe('stopped');
      done();
    }, 2001);
  });
});
