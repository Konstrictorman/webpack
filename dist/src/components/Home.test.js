import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
describe('Pruebas <Home/>', function () {
    var wrapper = shallow(React.createElement(Home, { init: 50 }));
    beforeEach(function () {
        wrapper = shallow(React.createElement(Home, { value: 50 }));
    });
    test('should return <Home> correctamente', function () {
        expect(wrapper).toMatchSnapshot();
    });
});
