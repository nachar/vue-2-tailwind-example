import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    filteredTasks: ({ selectedFilter, tasks }) => {
      if (selectedFilter === 'to-do') return tasks.filter((task) => !task.done);
      if (selectedFilter === 'done') return tasks.filter((task) => task.done);
      return tasks;
    },
  },
  mutations: {
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
  },
  actions: {
    addTask({ commit }, task) {
      commit('UPDATE_LAST_ID');
      commit('SET_NEW_TASK', task);
      commit('EDIT_TASK_WINDOW', false);
    },
    selectEditingTask({ commit }, task) {
      commit('SET_EDITING_TASK', task);
      if (task) commit('EDIT_TASK_WINDOW', true);
    },
    editTask({ commit }, task) {
      commit('SET_EDITING_TASK_DATA', task);
      commit('EDIT_TASK_WINDOW', false);
      commit('SET_EDITING_TASK', undefined);
    },
    deleteTask({ commit }, task) {
      commit('DELETE_TASK', task);
    },
    toggleEditTaskWindow({ commit }, status) {
      commit('EDIT_TASK_WINDOW', status);
      if (!status) commit('SET_EDITING_TASK', undefined);
    },
    changeFilter({ commit }, filter) {
      commit('SET_FILTER', filter);
    },
  },
});
