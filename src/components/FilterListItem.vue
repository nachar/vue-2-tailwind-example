<template>
  <li>
    <button
      @click="selectFilter()"
      class="filter-item text-dark-gray px-6 border-b-primary
      hover:text-black hover:border-b-2 py-4"
      :class="{'border-b-2 text-black': filter.key === selectedFilter}">
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
