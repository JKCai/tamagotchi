import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import TamagotchiControl from './TamagotchiControl';
configure({ adapter: new Adapter() })

describe("add new tamagotchi form should be changed", () => {
    it("form should be showed", () => {
        const wrapper = mount(<TamagotchiControl />);
        const instance = wrapper.instance();

        instance.showForm();
        expect(wrapper.state("formIsVisible")).toEqual(true);
    });

    it("form should be hided", () =>{
        const wrapper = mount(<TamagotchiControl/>);
        const instance = wrapper.instance();

        instance.hideForm();
        expect(wrapper.state("formIsVisible")).toEqual(false);
    });

   


    
});