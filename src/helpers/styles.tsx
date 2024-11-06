import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderColor: '#ccc',
  },
  taskButton: {
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  normalText: {
    fontSize: 17,
  },
  taskTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 16,
  },
  taskStatusText: {
    fontSize: 16,
  },
  taskBoxOverdue: {
    backgroundColor: '#FFCCCC',
  },
  taskBox: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
  },
  taskListContainer: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#6D757D',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  inputText: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderColor: '#CCCCCC',
    fontSize: 17,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchLabel: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 3,
    fontSize: 16,
    borderColor: 'gray',
  },
  filterDropdown: {
    height: 40,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskButtonLeft: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  taskButtonCenter: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  taskButtonRight: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default styles;
