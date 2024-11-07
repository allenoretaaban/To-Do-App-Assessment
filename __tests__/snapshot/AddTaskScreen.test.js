import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AddTaskScreen from '../screens/AddTaskScreen';
import store from '../helpers/store';

test('AddTaskScreen renders correctly and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <AddTaskScreen />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
