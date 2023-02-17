<template>
  <li
    :class="{ 'bg-tertiary-light': expired }"
    class="border-b-2 border-b-gray last:border-b-0 p-4 rounded">
    <div class="flex items-center">
      <button
        @click="changeStatus()"
        class="flex-none w-8 h-8 bg-gray rounded-full
         text-white flex justify-center items-center"
        :class="{ 'bg-success': task.done }">
        <span v-if="task.done" class="material-symbols-outlined">done</span>
      </button>
      <div class="flex-auto px-4">
        <p>{{ task.description }}</p>
        <p class="text-sm text-dark-gray">{{ task.date }}</p>
      </div>
      <div class="flex-none">
        <button @click="duplicateCurrentTask()" class="mr-1">
          <span class="material-symbols-outlined">content_copy</span>
        </button>
        <button @click="setEditingTask()" class="mr-1">
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button @click="deleteTask()">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
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
  computed: {
    expired() {
      return !this.task.done && new Date(this.task.date) < new Date();
    },
  },
  methods: {
    ...mapActions(['selectEditingTask', 'selectDeletingTask', 'changeTaskStatus', 'duplicateTask']),
    setEditingTask() {
      this.selectEditingTask(this.task);
    },
    changeStatus() {
      this.changeTaskStatus(this.task);
    },
    deleteTask() {
      this.selectDeletingTask(this.task);
    },
    duplicateCurrentTask() {
      this.duplicateTask(this.task);
    },
  },
};
</script>
