import React from 'react';
import { View } from 'react-native';
import styles from '../helpers/styles';
import TaskButton from './TaskButton';

const FilterBar = ({ onFilter }) => {
  const handleFilter = (text) => {
    onFilter(text);
  };

  return (
    <View style={styles.filterContainer}>
      <TaskButton
        title="Pending"
        color="red"
        top={10}
        buttonStyle={styles.taskButtonLeft}
        onPress={() => handleFilter('Pending')}
        onLongPress={() => {}}
      />
      <TaskButton
        title="In Progress"
        color="gray"
        top={10}
        buttonStyle={styles.taskButtonCenter}
        onPress={() => handleFilter('In Progress')}
        onLongPress={() => {}}
      />
      <TaskButton
        title="Completed"
        color="green"
        top={10}
        buttonStyle={styles.taskButtonCenter}
        onPress={() => handleFilter('Completed')}
        onLongPress={() => {}}
      />
      <TaskButton
        title="All"
        color="black"
        top={10}
        buttonStyle={styles.taskButtonRight}
        onPress={() => handleFilter('All')}
        onLongPress={() => {}}
      />
    </View>
  );
};

export default FilterBar;
