import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Task from '../components/Task';
import store from '../helpers/store';

const mockTask = {
  id: 1,
  title: "Sample Task",
  description: "This is a sample task",
  status: "Pending",
  dueDate: new Date().getTime(),
  displayDueDate: new Date().toLocaleString(),
};

test('Task component renders correctly and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Task task={mockTask} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
