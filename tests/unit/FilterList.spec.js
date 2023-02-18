import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import FilterList from '@/components/FilterList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
  filters: [
    { name: 'All tasks', key: 'all' },
    { name: 'ToDo', key: 'to-do' },
    { name: 'Done', key: 'done' },
  ],
};
const store = new Vuex.Store({
  state,
});

const wrapper = shallowMount(FilterList, { store, localVue });

describe('FilterList', () => {
  it('Component mounted', () => {
    expect(wrapper.findComponent(FilterList).exists()).toBeTruthy();
  });
  it('Children component', () => {
    expect(wrapper.findAllComponents({ name: 'FilterListItem' }).length).toBe(state.filters.length);
  });
});
