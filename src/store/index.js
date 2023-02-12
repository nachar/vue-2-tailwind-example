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
  },
  actions: {
    addTask({ commit }, task) {
      commit('SET_NEW_TASK', task);
    },
  },
  modules: {
  },
});
