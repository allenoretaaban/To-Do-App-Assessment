import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTaskScreen from '../screens/AddTaskScreen';

const mockStore = configureStore([]);
const store = mockStore({
  tasks: { tasks: [] },
});

test('adds a new task with valid title and description', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <AddTaskScreen />
    </Provider>
  );

  fireEvent.changeText(getByPlaceholderText('Task Title'), 'New Task');
  fireEvent.changeText(getByPlaceholderText('Task Description'), 'Task Description');
  fireEvent.press(getByText('Save'));

  const actions = store.getActions();
  expect(actions[0].type).toBe('tasks/addTask');
  expect(actions[0].payload).toMatchObject({
    title: 'New Task',
    description: 'Task Description',
  });
});
