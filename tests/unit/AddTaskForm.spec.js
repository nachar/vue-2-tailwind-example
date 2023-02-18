import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTaskForm from '@/components/AddTaskForm.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  addTask: jest.fn(),
  selectEditingTask: jest.fn(),
  editTask: jest.fn(),
};
const state = {
  editingTask: undefined,
};
const store = new Vuex.Store({
  state,
  actions,
});

const wrapper = shallowMount(AddTaskForm, {
  store,
  localVue,
});

describe('AddTaskForm', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(AddTaskForm).exists()).toBeTruthy();
  });
  it('Add task', () => {
    wrapper.vm.setData({ description: 'Test task', date: '2023-02-18' });
    wrapper.vm.saveTask();
    expect(actions.addTask).toHaveBeenCalledTimes(1);
  });
  it('Edit task', () => {
    wrapper.vm.setData({ description: 'Test task', date: '2023-02-18', id: 1 });
    wrapper.vm.saveTask();
    expect(actions.editTask).toHaveBeenCalledTimes(1);
  });
});
