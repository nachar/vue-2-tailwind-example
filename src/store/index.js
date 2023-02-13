import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: [
      { name: 'All task', key: 'all-task' },
      { name: 'ToDo', key: 'to-do' },
      { name: 'Done', key: 'done' },
    ],
    tasks: [],
    editingTask: undefined,
    lastId: 0,
  },
  getters: {
  },
  mutations: {
    SET_NEW_TASK(state, task) {
      state.lastId += 1;
      state.tasks.push({
        ...task,
        id: state.lastId,
      });
    },
    SET_EDITING_TASK(state, task) {
      state.editingTask = structuredClone(task);
    },
    SET_EDITING_TASK_DATA(state, { id, description, date }) {
      const currentTaskIndex = state.tasks.findIndex((item) => item.id === id);
      state.tasks[currentTaskIndex].description = description;
      state.tasks[currentTaskIndex].date = date;
      state.editingTask = undefined;
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('SET_NEW_TASK', task);
    },
    selectEditingTask({ commit }, task) {
      commit('SET_EDITING_TASK', task);
    },
    editTask({ commit }, task) {
      commit('SET_EDITING_TASK_DATA', task);
    },
  },
});
