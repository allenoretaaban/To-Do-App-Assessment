import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../helpers/styles';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../controllers/tasksSlice';
import { useNavigation } from '@react-navigation/native';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const isOverdue = new Date(task.dueDate) < new Date() && task.status === 'Pending';
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Edit Task', { taskId: task.id })}
      onLongPress={() => handleDelete(dispatch, task.id)}
    >
      <View style={[styles.taskBox, isOverdue && styles.taskBoxOverdue]}>
        <Text style={styles.taskTitleText}>
          Title: {task.title}
          </Text>
        <Text style={styles.taskTitleText}>
          Description: {task.description}
        </Text>
        <Text style={styles.taskText}>
          Status: {task.status}
        </Text>
        <Text style={styles.taskText}>
          Due Date: {task.displayDueDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const handleDelete = (dispatch, taskId: any) => {
  Alert.alert('Delete Tast', 'Are you sure?', [
    {
      text: 'Yes',
      onPress: () => dispatch(deleteTask(taskId)),
    },
    {
      text: 'No',
    },
  ]);
};

export default React.memo(Task);
