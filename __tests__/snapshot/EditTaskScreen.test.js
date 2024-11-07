import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import EditTaskScreen from '../screens/EditTaskScreen';
import store from '../helpers/store';

test('EditTaskScreen renders correctly and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <EditTaskScreen />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
