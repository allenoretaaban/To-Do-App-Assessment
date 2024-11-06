import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, updateStatus } from '../controllers/tasksSlice';
import styles from '../helpers/styles';
import TaskButton from '../components/TaskButton';
import DatePicker from 'react-native-date-picker';

const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === taskId));
  console.log(task);

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(new Date(task?.dueDate) || new Date());
  const [open, setOpen] = useState(false);
  const [dueDateTitle, setDueDateTitle] = useState(task?.displayDueDate);
  const [status, setStatus] = useState(task?.status || '');

  const handleUpdateTask = () => {
    if (title.trim() && description.trim()) {
      let formattedDueDate = new Date(dueDate).getTime();
      let newStatus = new Date(dueDate) < new Date() ? 'Pending' : 'In Progress';
      dispatch(editTask({ id: taskId, title: title, description: description, status: newStatus, dueDate: formattedDueDate, displayDueDate: dueDateTitle }));
      navigation.goBack();
    } else {
      Alert.alert('Edit Task', 'Invalid input.', [{
        text: 'Close',
      }]);
    }
  };

  const handleSetCompleted = () => {
    Alert.alert('Set Completed', 'Are you sure?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch(updateStatus({ id: taskId, status: 'Completed'}));
          navigation.goBack();
        },
      },
      {
        text: 'Close',
      },
  ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#A9A9A9"
      />
      <Button title={dueDateTitle} onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={dueDate}
        onConfirm={(date) => {
          setOpen(false);
          setDueDate(date);
          setDueDateTitle(new Date(date).toLocaleString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <TaskButton
        title="Update"
        color="#007BFF"
        top={30}
        buttonStyle={styles.taskButton}
        onPress={() => handleUpdateTask()}
        onLongPress={() => {}}
      />
      <TaskButton
        title="Set Completed"
        color="green"
        top={10}
        buttonStyle={styles.taskButton}
        onPress={() => handleSetCompleted()}
        onLongPress={() => {}}
      />
      <TaskButton
        title="Cancel"
        color="#343A40"
        top={10}
        buttonStyle={styles.taskButton}
        onPress={() => navigation.goBack()}
        onLongPress={() => {}}
      />
    </View>
  );
};

export default EditTaskScreen;
