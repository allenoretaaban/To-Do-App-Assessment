import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Task from '../components/Task';

const mockStore = configureStore([]);
const store = mockStore({});

test('deletes a task on long press', () => {
  const task = { id: 1, title: 'Test Task', description: 'Test Description' };

  const { getByText } = render(
    <Provider store={store}>
      <Task task={task} />
    </Provider>
  );

  fireEvent(getByText('Title: Test Task'), 'longPress');

  const actions = store.getActions();
  expect(actions[0].type).toBe('tasks/deleteTask');
  expect(actions[0].payload).toBe(1);
});
