export default {
  SET_NEW_TASK(state, task) {
    state.tasks.push({
      ...task,
      id: state.lastId,
      done: false,
    });
  },
  UPDATE_LAST_ID(state) {
    state.lastId += 1;
  },
  SET_EDITING_TASK(state, task) {
    state.editingTask = structuredClone(task);
  },
  SET_EDITING_TASK_DATA(state, { id, description, date }) {
    const currentTaskIndex = state.tasks.findIndex((item) => item.id === id);
    state.tasks[currentTaskIndex].description = description;
    state.tasks[currentTaskIndex].date = date;
  },
  DELETE_TASK(state, { id }) {
    state.tasks = state.tasks.filter((item) => item.id !== id);
  },
  EDIT_TASK_WINDOW(state, status) {
    state.editTaskWindow = status;
  },
  SET_FILTER(state, { key }) {
    state.selectedFilter = key;
  },
};
