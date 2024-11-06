import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './helpers/store';

import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';

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
