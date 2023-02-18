import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTask from '@/components/AddTask.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  toggleEditTaskWindow: jest.fn(),
};
const state = {
  editTaskWindow: false,
};
let store = new Vuex.Store({
  state,
  actions,
});

let wrapper = shallowMount(AddTask, { store, localVue });
const groupClasses = ['task-form', 'absolute', 'right-0', 'w-full', 'bg-gray', 'rounded', 'p-4'];

describe('AddTask', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(AddTask).exists()).toBeTruthy();
  });
  it('Element initial status', () => {
    const elementClasses = new Set(wrapper.find('.task-form').classes());
    expect(elementClasses).toEqual(new Set(groupClasses));
  });
  it('Element open', () => {
    state.editTaskWindow = true;
    store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(AddTask, { store, localVue });

    const elementClasses = new Set(wrapper.find('.task-form').classes());
    expect(elementClasses).toEqual(new Set([...groupClasses, 'task-form--active']));
  });
  it('Open Window', () => {
    wrapper.find('#add-task').trigger('click');
    expect(actions.toggleEditTaskWindow).toHaveBeenCalledTimes(1);
  });
  it('Close Window', () => {
    wrapper.find('#close-window').trigger('click');
    expect(actions.toggleEditTaskWindow).toHaveBeenCalledTimes(2);
  });
});
