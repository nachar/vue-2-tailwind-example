<template>
  <li>
    <p><span>{{ task.id }} </span>{{ task.description }}</p>
    <button @click="setEditingTask()">Edit</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskComponent',
  props: {
    task: {
      require: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(['selectEditingTask']),
    setEditingTask() {
      this.selectEditingTask(this.task);
    },
  },
};
</script>
