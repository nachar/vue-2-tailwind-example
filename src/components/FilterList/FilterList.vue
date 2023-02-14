<template>
  <div>
    <ul class="flex justify-center">
      <FilterListItem v-for="filter in filters" :filer="filter" :key="filter.key"/>
    </ul>
  </div>
</template>

<script>
import FilterListItem from '@/components/FilterListItem/FilterListItem.vue';
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

<style scoped lang="scss">
</style>
