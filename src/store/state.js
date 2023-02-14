export default {
  filters: [
    { name: 'All tasks', key: 'all' },
    { name: 'ToDo', key: 'to-do' },
    { name: 'Done', key: 'done' },
  ],
  selectedFilter: 'all',
  tasks: [],
  editingTask: undefined,
  lastId: 0,
  editTaskWindow: false,
};
