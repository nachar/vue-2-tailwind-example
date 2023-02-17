<template>
  <li class="border-b-2 border-b-gray last:border-b-0 p-4">
    <button
      @click="changeStatus()"
      class="w-8 h-8 bg-dark-gray rounded-full text-white flex justify-center items-center"
      :class="{ 'bg-success': task.done }">
      <span v-if="task.done" class="material-symbols-outlined">done</span>
    </button>
    <p>{{ task.description }}</p>
    <p class="text-sm">{{ task.date }}</p>
    <button @click="deleteTask()">Delete</button>
    <br>
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
    ...mapActions(['selectEditingTask', 'selectDeletingTask', 'changeTaskStatus']),
    setEditingTask() {
      this.selectEditingTask(this.task);
    },
    changeStatus() {
      this.changeTaskStatus(this.task);
    },
    deleteTask() {
      this.selectDeletingTask(this.task);
    },
  },
};
</script>
