<template>
  <nav>
    <ul class="flex justify-center bg-gray px-4">
      <FilterListItem v-for="filter in filters" :filter="filter" :key="filter.key"/>
    </ul>
  </nav>
</template>

<script>
import FilterListItem from '@/components/FilterListItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'FilterList',
  components: {
    FilterListItem,
  },
  computed: {
    ...mapState(['filters']),
  },
};
</script>
