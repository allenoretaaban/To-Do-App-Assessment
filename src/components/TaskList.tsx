/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Task from './Task';
import styles from '../helpers/styles';

const TaskList = ({ tasks }) => {
  return (
    <View>
      <Text style={[styles.normalText, { marginTop: 20, fontWeight: 'bold' }]}>Task List:</Text>
      {
        tasks.length === 0 ?
          <Text style={{ alignSelf:'center', color:'#000000' }}>No task found.</Text>
        :
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Task task={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginBottom: 120, marginTop: 5 }}
          />
      }
    </View>
  );
};

export default TaskList;
