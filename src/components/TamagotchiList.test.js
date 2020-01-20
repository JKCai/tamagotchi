import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import TamagotchiList from './TamagotchiList';

configure({ adapter: new Adapter() })

  const mockItems = [
        {
            name: 'Rolly',
            live: 100,
            hungryLevel: 1
        },
        {
            name: 'Nugget',
            live: 87,
            hungryLevel: 2
        }
  ];

  describe("Tamagotchi Class Component", () => {
      it("should render all 2 items", () => {
        const wrapper = mount(<TamagotchiList creatures={mockItems}/>);
        expect(wrapper.find(".tamagotchi").length).toBe(2);
      });
  });

  


