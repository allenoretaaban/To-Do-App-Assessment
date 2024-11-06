import React, { useState } from 'react';
import { View } from "react-native";
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import styles from '../helpers/styles';
import TaskButton from '../components/TaskButton';
import FilterBar from '../components/FilterBar';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter
  ).filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchQuery} />
      <FilterBar onFilter={setFilter} />
      <TaskButton
        title="Add Task"
        color="#007BFF"
        top={10}
        buttonStyle={styles.taskButton}
        onPress={() => navigation.navigate('Add Task')}
        onLongPress={() => {}}
      />
      <TaskList tasks={filteredTasks} />
    </View>
  );
};

export default HomeScreen;
