import React from 'react';
import { shallow } from 'enzyme';  // using the Enzyme shallow rendering API to write unit tests 
//import toJSON from 'enzyme-to-json';  // this runs automatically with update to jest.config.json
import Header from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';  // this is replaced by enzyme

test('render Header correctly', () => {
    const wrapper = shallow(<Header />);  // create snapshot, this gives access to the jsx in Header and shallow methods
    expect(wrapper).toMatchSnapshot();
    //expect(toJSON(wrapper)).toMatchSnapshot();  // the toJSON method call runs automatically with the update in jest.config.json

    /************************************************** */
    // this is replaced by enzyme
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
