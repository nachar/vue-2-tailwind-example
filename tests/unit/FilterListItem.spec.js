import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import FilterListItem from '@/components/FilterListItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  changeFilter: jest.fn(),
};
const state = {
  selectedFilter: 'all',
};
const store = new Vuex.Store({
  state,
  actions,
});

const wrapper = shallowMount(FilterListItem, {
  store,
  localVue,
  propsData: {
    filter: { name: 'ToDo', key: 'to-do' },
  },
});

const groupClasses = ['filter-item', 'text-dark-gray', 'px-6', 'border-b-primary', 'hover:text-black', 'hover:border-b-2', 'py-4'];

describe('FilterListItem', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(FilterListItem).exists()).toBeTruthy();
  });
  it('Select filter', () => {
    wrapper.find('.filter-item').trigger('click');
    expect(actions.changeFilter).toHaveBeenCalledTimes(1);
  });
  it('Name ', () => {
    expect(wrapper.find('.filter-item').text()).toEqual('ToDo');
  });
  it('Default status ', () => {
    const elementClasses = new Set(wrapper.find('.filter-item').classes());
    expect(elementClasses).toEqual(new Set(groupClasses));
  });
  it('Default status ', async () => {
    await wrapper.setProps({ filter: { name: 'All tasks', key: 'all' } });
    const elementClasses = new Set(wrapper.find('.filter-item').classes());
    expect(elementClasses).toEqual(new Set([...groupClasses, 'border-b-2', 'text-black']));
  });
});
