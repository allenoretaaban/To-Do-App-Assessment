import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../controllers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
