<template>
  <li>
    <button
      @click="selectFilter()"
      class="filter-item py-4 px-6 border-b-primary"
      :class="{'border-b-2': filter.key === selectedFilter}">
      {{ filter.name }}
    </button>
  </li>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'FilterListItem',
  props: {
    filter: {
      require: true,
      type: Object,
    },
  },
  computed: {
    ...mapState(['selectedFilter']),
  },
  methods: {
    ...mapActions(['changeFilter']),
    selectFilter() {
      this.changeFilter(this.filter);
    },
  },
};
</script>
