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
    tasks: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, reprehenderit',
        date: new Date(),
        id: 1,
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: new Date(),
        id: 2,
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis',
        date: new Date(),
        id: 3,
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
