import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TaskComponent from '@/components/TaskComponent.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  selectEditingTask: jest.fn(),
  selectDeletingTask: jest.fn(),
  changeTaskStatus: jest.fn(),
  duplicateTask: jest.fn(),
};
const store = new Vuex.Store({
  actions,
});

const wrapper = shallowMount(TaskComponent, {
  store,
  localVue,
  propsData: {
    task: {
      description: 'Test task',
      id: 1,
      done: false,
      date: '3000-01-01',
    },
  },
});
const groupClasses = ['task-container', 'border-b-2', 'border-b-gray', 'last:border-b-0', 'p-4', 'rounded'];
const groupClassesDone = ['task-container__done', 'flex-none', 'w-8', 'h-8', 'bg-gray', 'rounded-full', 'text-white', 'flex', 'justify-center', 'items-center'];

describe('TaskComponent', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(TaskComponent).exists()).toBeTruthy();
  });
  it('Initial status', () => {
    const elementClasses = new Set(wrapper.find('.task-container').classes());
    expect(elementClasses).toEqual(new Set(groupClasses));
  });
  it('Expired', async () => {
    await wrapper.setProps({
      task: {
        description: 'Test task',
        id: 1,
        done: false,
        date: '2000-01-01',
      },
    });
    const elementClasses = new Set(wrapper.find('.task-container').classes());
    expect(elementClasses).toEqual(new Set([...groupClasses, 'bg-tertiary-light']));
  });
  it('Text', () => {
    expect(wrapper.find('.task-container__description').text()).toEqual('Test task');
    expect(wrapper.find('.task-container__date').text()).toEqual('2000-01-01');
  });
  it('Unresolved task ', () => {
    const elementClasses = new Set(wrapper.find('.task-container__done').classes());
    expect(elementClasses).toEqual(new Set(groupClassesDone));
  });
  it('Done task', async () => {
    await wrapper.setProps({
      task: {
        description: 'Test task',
        id: 1,
        done: true,
        date: '3000-01-01',
      },
    });

    const elementClasses = new Set(wrapper.find('.task-container__done').classes());
    expect(elementClasses).toEqual(new Set([...groupClassesDone, 'bg-success']));
  });
  it('Change status', () => {
    wrapper.find('.task-container__done').trigger('click');
    expect(actions.changeTaskStatus).toHaveBeenCalledTimes(1);
  });
  it('Duplicate current task', () => {
    wrapper.find('.task-methods__duplicate').trigger('click');
    expect(actions.duplicateTask).toHaveBeenCalledTimes(1);
  });
  it('Set editing task', () => {
    wrapper.find('.task-methods__edit').trigger('click');
    expect(actions.selectEditingTask).toHaveBeenCalledTimes(1);
  });
  it('Delete task', () => {
    wrapper.find('.task-methods__delete').trigger('click');
    expect(actions.selectDeletingTask).toHaveBeenCalledTimes(1);
  });
});
