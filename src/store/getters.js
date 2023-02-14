export default {
  filteredTasks: ({ selectedFilter, tasks }) => {
    if (selectedFilter === 'to-do') return tasks.filter((task) => !task.done);
    if (selectedFilter === 'done') return tasks.filter((task) => task.done);
    return tasks;
  },
};
