import React from 'react';
import renderer from 'react-test-renderer';
import TaskButton from '../components/TaskButton';

test('TaskButton renders correctly and matches snapshot', () => {
  const tree = renderer.create(
    <TaskButton title="Test Button" color="#007BFF" onPress={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
