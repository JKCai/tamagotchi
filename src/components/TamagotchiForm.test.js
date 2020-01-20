import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import TamagotchiForm from './TamagotchiForm';
configure({ adapter: new Adapter() })

const handleCreateTamagotchi = jest.fn();

const initialProps = {
    handleCreateTamagotchi,
    addNewCreatureToTamagotchi: jest.fn(),
    hideFormAfterSubmission: jest.fn()
}

it('calls handleCreateTamagotchi prop function when form is submitted', () =>{
    
    const wrapper = mount(<TamagotchiForm {...initialProps}/>);

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(initialProps.addNewCreatureToTamagotchi).toHaveBeenCalledTimes(1);
    expect(initialProps.hideFormAfterSubmission).toHaveBeenCalledTimes(1);
})
