<template>
  <li class="px-6">
    <button @click="selectFilter()">
      {{ filer.name }}
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterListItem',
  props: {
    filer: {
      require: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(['changeFilter']),
    selectFilter() {
      this.changeFilter(this.filer);
    },
  },
};
</script>
