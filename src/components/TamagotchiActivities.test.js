import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import TamagotchiActivities from './TamagotchiActivities';
configure({ adapter: new Adapter() })

describe("tamagotchi state should be changed", () => {
    it("life should be reduced by 3", () => {
        const wrapper = mount(<TamagotchiActivities />);
        const instance = wrapper.instance();

        instance.reduceLife();
        expect(wrapper.state("life")).toEqual(97);
    });

    it("hungryLevel should be increased by 1", () =>{
        const wrapper = mount(<TamagotchiActivities/>);
        const instance = wrapper.instance();

        instance.increaseHungry();
        expect(wrapper.state("hungryLevel")).toEqual(2);
    });

    it("hungryLevel should be decreased by 1 and life should be increased by 5", () =>{
        const wrapper = mount(<TamagotchiActivities/>);
        const instance = wrapper.instance();

        instance.feed();
        expect(wrapper.state("hungryLevel")).toEqual(0);
        expect(wrapper.state("life")).toEqual(100);    
    });

    it("life should be increased by 10", () =>{
        const wrapper = mount(<TamagotchiActivities/>);
        const instance = wrapper.instance();

        instance.putToBed();
        expect(wrapper.state("life")).toEqual(100);    
    });

    it("life should be reduced by 3 and hungryLevel increases by 1", () => {
        jest.useFakeTimers();
        const wrapper = mount(<TamagotchiActivities />);
        const instance = wrapper.instance();

        instance.componentDidMount();
        setTimeout(() => {
            expect(wrapper.state("life")).toEqual(97);
          }, 3000);
        setTimeout(() => {
            expect(wrapper.state("hungryLevel")).toEqual(2);
          }, 6000);
    });

    
});
