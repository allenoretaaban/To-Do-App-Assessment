import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/helpers/store';

import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import EditTaskScreen from './src/screens/EditTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:true }} >
          <Stack.Group>
            <Stack.Screen
              name="To Do App"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Add Task"
              component={AddTaskScreen}
            />
            <Stack.Screen
              name="Edit Task"
              component={EditTaskScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
