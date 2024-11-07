import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import store from '../helpers/store';

test('HomeScreen renders correctly and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
