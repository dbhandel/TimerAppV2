const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', function() {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', function() {
    it('should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
      let $el = $(React.findDOMNode(controls));
      let $pausebutton = $el.find('button:contains(Pause)');

      expect($pausebutton.length).toBe(1);
    });

    it('should render startTimer when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' />);
      let $el = $(React.findDOMNode(controls));
      let $pausebutton = $el.find('button:contains(Start)');

      expect($pausebutton.length).toBe(1);
    });
  });
});
