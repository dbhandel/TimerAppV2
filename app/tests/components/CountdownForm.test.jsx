const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');
const expect = require('expect');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
   it('should exist', () => {
     expect(CountdownForm).toExist();
   });

   describe('updateStateSeconds', () => {
     it('should be called when input is a valid number', () => {
       const spy = expect.createSpy();
       let countdownForm = TestUtils.renderIntoDocument(<CountdownForm updateStateSeconds={spy}/>);
       let $el = $(React.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = 61;
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(61);
    });

    it('should not be called when input is an invalid number', () => {
      const spy = expect.createSpy();
      let countdownForm = TestUtils.renderIntoDocument(<CountdownForm updateStateSeconds={spy}/>);
      countdownForm.refs.seconds.value = 'a61';
      let $el = $(React.findDOMNode(countdownForm));
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toNotHaveBeenCalled();
   });
 });
});
