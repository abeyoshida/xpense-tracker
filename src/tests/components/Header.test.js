import React from 'react';
import { shallow } from 'enzyme';  // using the Enzyme shallow rendering API to write unit tests 
//import toJSON from 'enzyme-to-json';  // this runs automatically with update to jest.config.json
import { Header } from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';  // this is replaced by enzyme

test('render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);  // create snapshot, this gives access to the jsx in Header and shallow methods
    expect(wrapper).toMatchSnapshot();
});

test('call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});