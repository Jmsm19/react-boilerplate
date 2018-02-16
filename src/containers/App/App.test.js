import React from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App smt={0} onAction={() => null} />);
  });

  it('Should render <App /> component', () => {
    expect(wrapper.find(App));
  });

  it(`Should show an <h1> with the text: 'Hello Man10'`, () => {
    expect(wrapper.contains(<h1>Hello Man10</h1>));
  });
});

Enzyme.configure({ adapter: new Adapter() });
