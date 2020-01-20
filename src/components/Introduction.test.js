import Introduction from './Introduction';
import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<Introduction/>);
});