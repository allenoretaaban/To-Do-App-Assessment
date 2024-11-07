import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditTaskScreen from '../screens/EditTaskScreen';

const mockStore = configureStore([]);
const store = mockStore({
  tasks: { tasks: [{ id: 1, title: 'Old Task', description: 'Old Description' }] },
});

test('edits an existing task', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <EditTaskScreen route={{ params: { taskId: 1 } }} />
    </Provider>
  );

  fireEvent.changeText(getByPlaceholderText('Task Title'), 'Updated Task');
  fireEvent.changeText(getByPlaceholderText('Task Description'), 'Updated Description');
  fireEvent.press(getByText('Update'));

  const actions = store.getActions();
  expect(actions[0].type).toBe('tasks/editTask');
  expect(actions[0].payload).toMatchObject({
    id: 1,
    title: 'Updated Task',
    description: 'Updated Description',
  });
});
