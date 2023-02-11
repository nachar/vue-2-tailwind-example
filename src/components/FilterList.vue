<template>
  <div>
    <ul class="columns-3 text-center border-b">
      <FilterListItem v-for="filter in filters" :name="filter.name" :key="filter.key"/>
    </ul>
  </div>
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

<style scoped lang="scss">
</style>
