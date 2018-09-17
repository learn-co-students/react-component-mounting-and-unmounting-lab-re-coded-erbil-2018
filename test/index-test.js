import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '../src/components/Game';
import Pancake from '../src/components/Pancake';

Enzyme.configure({ adapter: new Adapter() })


var clock;
beforeEach(function () {

     clock = sinon.useFakeTimers();
 });

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {

    const gWrapper = mount(<Game />);
    expect(gWrapper.state('time')).to.not.equal('undefined');
  });
});