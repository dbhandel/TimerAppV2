const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={61}/>);
      let $el = $(ReactDOM.findDOMNode(clock));
      let clockText = $el.find('.clock-text').text();
      //let clockText = clock.refs.clockText.innerHTML;

      expect(clockText).toBe('01:01');
    });

  })

  describe('formatSeconds', () => {
    it('should be a method of Clock', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let expected = clock.formatSeconds;
      expect(expected).toBeA('function');
    });
    it('should format seconds entered into 00:00 format', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let actual = clock.formatSeconds(615);
      let expected = '10:15';
      expect(actual).toBe(expected);
    });
    it('should format seconds entered into 00:00 format when seconds is < 10 and mins is 0', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let actual = clock.formatSeconds(9);;
      let expected = '00:09';
      expect(actual).toBe(expected);
    });

  });
});
