import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ToDoList from '@/components/ToDoList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const getters = {
  filteredTasks: () => [],
};
let store = new Vuex.Store({
  getters,
});

let wrapper = shallowMount(ToDoList, { store, localVue });

describe('ToDoList', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(ToDoList).exists()).toBeTruthy();
  });
  it('Without tasks', () => {
    expect(wrapper.find('#without-tasks').exists()).toBeTruthy();
  });
  it('With tasks', () => {
    getters.filteredTasks = () => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    store = new Vuex.Store({
      getters,
    });

    wrapper = shallowMount(ToDoList, { store, localVue });

    expect(wrapper.find('#without-tasks').exists()).toBeFalsy();
  });
  it('Tasks length', () => {
    expect(wrapper.findAllComponents({ name: 'TaskComponent' }).length).toBe(4);
  });
});
