import React from 'react';
import { Home } from './Home';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Pruebas <Home/>', () => {
   let wrapper = renderer.create(<Home init={50}/>);
   let tree = wrapper.toJSON();
   expect(tree).toMatchSnapshot();
   
   
   beforeEach(() => {
      wrapper = renderer.create(<Home value={50}/>)
   })

   test('should return <Home> correctamente', () => {
      

      expect(wrapper).toMatchSnapshot();
   })


})