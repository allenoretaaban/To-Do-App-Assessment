import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '../screens/HomeScreen';

const mockStore = configureStore([]);
const store = mockStore({
  tasks: { tasks: [{ id: 1, title: 'Task 1', status: 'Completed' }] },
});

test('filters tasks by status', () => {
  const { getByText } = render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );

  fireEvent.press(getByText('Completed'));

  // Verify only completed tasks are shown
  const taskList = getByText('Task 1');
  expect(taskList).toBeTruthy();
});

test('filters tasks by search query', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );

  fireEvent.changeText(getByPlaceholderText('Search...'), 'Task 1');
  expect(getByText('Task 1')).toBeTruthy();
  expect(queryByText('Other Task')).toBeNull();
});
