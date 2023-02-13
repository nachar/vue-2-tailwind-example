<template>
  <li>
    <p><span>{{ task.id }} | </span>{{ task.description }} | <span>{{ task.date }}</span></p>
    <button @click="deleteCurrentTask()">Delete</button>
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
    ...mapActions(['selectEditingTask', 'deleteTask']),
    setEditingTask() {
      this.selectEditingTask(this.task);
    },
    deleteCurrentTask() {
      this.deleteTask(this.task);
    },
  },
};
</script>
