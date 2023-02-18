import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ModalDelete from '@/components/ModalDelete.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  deleteTask: jest.fn(),
  selectDeletingTask: jest.fn(),
};
const state = {
  deletingTask: undefined,
};
let store = new Vuex.Store({
  state,
  actions,
});

let wrapper = shallowMount(ModalDelete, { store, localVue });

describe('ModalDelete', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(ModalDelete).exists()).toBeTruthy();
  });
  it('Initial status ', () => {
    expect(wrapper.find('.modal-delete').exists()).toBeFalsy();
  });
  it('Deleting task ', () => {
    state.deletingTask = {
      id: 1,
      date: '2023-04-02',
      description: 'Test task',
    };
    store = new Vuex.Store({
      state,
      actions,
    });

    wrapper = shallowMount(ModalDelete, { store, localVue });
    expect(wrapper.find('.modal-delete').exists()).toBeTruthy();
  });
  it('Cancel deleting task', () => {
    wrapper.find('#cancel-deleting-task').trigger('click');
    expect(actions.selectDeletingTask).toHaveBeenCalledTimes(1);
  });
  it('Delete task', () => {
    wrapper.find('#delete-task').trigger('click');
    expect(actions.deleteTask).toHaveBeenCalledTimes(1);
  });
});
