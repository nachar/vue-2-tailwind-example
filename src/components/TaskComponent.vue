<template>
  <li
    :class="{ 'bg-tertiary-light': expired }"
    class="task-container border-b-2 border-b-gray last:border-b-0 p-4 rounded">
    <div class="flex items-center">
      <button
        @click="changeStatus()"
        class="task-container__done flex-none w-8 h-8 bg-gray rounded-full
         text-white flex justify-center items-center"
        :class="{ 'bg-success': task.done }">
        <span v-if="task.done" class="material-symbols-outlined">done</span>
      </button>
      <div class="flex-auto px-4">
        <p class="task-container__description">{{ task.description }}</p>
        <p class="task-container__date text-sm text-dark-gray">{{ task.date }}</p>
      </div>
      <div class="task-methods flex-none">
        <button @click="duplicateCurrentTask()" class="mr-1">
          <span class="task-methods__duplicate material-symbols-outlined">content_copy</span>
        </button>
        <button @click="setEditingTask()" class="mr-1">
          <span class="task-methods__edit material-symbols-outlined">edit</span>
        </button>
        <button @click="deleteTask()">
          <span class="task-methods__delete material-symbols-outlined">delete</span>
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
