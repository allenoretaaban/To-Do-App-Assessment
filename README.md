This code is for a React Native "To Do" application using Redux for state management, React Navigation for screen transitions, and components to organize and display tasks. The app has the following main functionalities:

Core Components and Structure

1. App.tsx: Sets up the Redux store, configures navigation with a stack navigator, and provides navigation between three main screens:
- HomeScreen: Main task list with options to filter, search, and add tasks.
- AddTaskScreen: Form to add a new task.
- EditTaskScreen: Form to edit an existing task.

2. HomeScreen.tsx: 
- Displays tasks with a search bar, filter bar, and task button to add new tasks.
- Utilizes TaskList to render filtered tasks based on the selected filter and search query.

3. AddTaskScreen.tsx: 
-Contains input fields for the task title, description, and a date picker for the due date.
- handleSaveTask function validates inputs, creates a new task object, and dispatches addTask to the Redux store.
- The task status is set based on whether the due date is in the past or future.

4. EditTaskScreen.tsx:
- Allows editing of task properties, updating the due date, and setting the task as completed.
- Uses handleUpdateTask to update task details in the Redux store.
- handleSetCompleted dispatches a status change to "Completed".

Components

1. Task.tsx: Displays individual task details and allows for long-press deletion, with overdue styling for pending tasks past their due date.
2. TaskList.tsx: Lists tasks using a FlatList, with a message if no tasks are found.
3. TaskButton.tsx: Custom button component used across screens for various actions.
4. FilterBar.tsx: Contains filter buttons for viewing tasks by status (e.g., "Pending").

Additional Notes

1. The task's due date and status are managed in AddTaskScreen and EditTaskScreen.
2. TaskList and Task components improve app performance by rendering only the necessary parts.
3. Redux actions for adding, editing, updating status, and deleting tasks are managed by tasksSlice.
4. This setup provides a flexible, responsive to-do app with task management, status updates, and search/filtering capabilities. Let me know if you'd like any specific improvements or features added to this code!

Installation

## Step 1: Install Dependencies
npm install

## Step 2: To start the Metro bundler
npx react-native start

## Step 3: To run the app on an Android emulator or a physical device: (since it is tested in Android)
npx react-native run-android or npm run android

1. State Management
I chose Redux for state management because it centralizes application data and provides a predictable state container. Redux's straightforward action/reducer model works well here and supports scalability by enabling the addition of more actions and reducers as the application grows. To scale for a larger app, I would modularize state into feature slices, following the Redux Toolkit's structure, and use Redux middleware (Thunk) to manage asynchronous tasks.

2. Performance Optimization
To optimize performance, I used React.memo to prevent unnecessary re-renders in components like Task, which only updates when its props change. Additionally, I used FlatList for efficient rendering of the task list, leveraging its lazy loading and virtualization to handle large data efficiently.

3. Testing Strategy
I focus on unit testing critical parts of the application, such as action creators, reducers, and utility functions, because they contain the business logic. Guidelines include testing logic-heavy components and ensuring that all actions produce expected state changes. For UI testing, I use snapshot tests to validate component rendering.

4. Code Structure
The project structure separates screens, components, and helpers for clarity and maintainability. screens handle navigation and state retrieval, components are reusable UI elements, and helpers manage shared styles and the Redux store. This separation promotes modularity and simplifies debugging.
