import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../controllers/tasksSlice';
import styles from '../helpers/styles';
import TaskButton from '../components/TaskButton';
import DatePicker from 'react-native-date-picker';

const AddTaskScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dueDateTitle, setDueDateTitle] = useState('Select Due Date');
  const descriptionInput = useRef(null);

  const handleSaveTask = () => {
    if (title.trim() && description.trim()) {
      console.log(dueDate);
      console.log(new Date(dueDate).getTime());
      const newTask = {
        id: new Date(dueDate).getTime(),
        title,
        description,
        status: new Date(dueDate) < new Date() ? 'Pending' : 'In Progress',
        dueDate: new Date(dueDate).getTime(),
        displayDueDate: new Date(dueDate).toLocaleString(),
      };
      dispatch(addTask(newTask));

      navigation.goBack();
    } else {
      Alert.alert('Add Task', 'Invalid input.', [{
        text: 'Close',
      }]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#A9A9A9"
        onSubmitEditing={() => descriptionInput.current?.focus()}
      />
      <TextInput
        ref={descriptionInput}
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
        title="Save"
        color="#007BFF"
        top={30}
        buttonStyle={styles.taskButton}
        onPress={() => handleSaveTask()}
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

export default AddTaskScreen;
