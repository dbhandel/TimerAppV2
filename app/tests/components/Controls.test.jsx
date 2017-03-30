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
    it('should render pause when started if in countdown app', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' app='countdown'/>);
      let $el = $(React.findDOMNode(controls));
      let $pausebutton = $el.find('button:contains(Pause)');

      expect($pausebutton.length).toBe(1);
    });

    it('should render startTimer when paused in countdown app', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' app='countdown'/>);
      let $el = $(React.findDOMNode(controls));
      let $pausebutton = $el.find('button:contains(Start)');

      expect($pausebutton.length).toBe(1);
    });    it('should render stop when started if in timer app', () => {
          let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' app='timer'/>);
          let $el = $(React.findDOMNode(controls));
          let $Stopbutton = $el.find('button:contains(Stop)');

          expect($Stopbutton.length).toBe(1);
        });

        it('should render Start when stopped in timer app', () => {
          let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='stopped' app='timer'/>);
          let $el = $(React.findDOMNode(controls));
          let $startbutton = $el.find('button:contains(Start)');

          expect($startbutton.length).toBe(1);
        });
  });
});
