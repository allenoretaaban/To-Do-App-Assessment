import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import styles from '../helpers/styles';

const TaskButton = ({ title, color, top = 0, buttonStyle, onPress, onLongPress,  }) => {
  return (
    <TouchableOpacity
      style={[buttonStyle, { backgroundColor: color, marginTop: top }]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TaskButton;