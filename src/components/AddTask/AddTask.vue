<template>
  <div class="fixed left-0 bottom-0 w-full">
    <div class="container mx-auto">
      <div class="relative">
        <button
          @click="toggleTask(true)"
          class="absolute right-0 bottom-0 p-6 rounded-full">
          Add task
        </button>
        <div
          class="task-form absolute right-0 w-full bg-gray-100 rounded p-4"
          :class="{ 'task-form--active': editTaskWindow }">
          <button @click="toggleTask(false)">Close</button>
          <AddTaskForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from '@/components/AddTaskForm/AddTaskForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AddTask',
  components: {
    AddTaskForm,
  },
  computed: {
    ...mapState(['editTaskWindow']),
  },
  methods: {
    ...mapActions(['toggleEditTaskWindow']),
    toggleTask(status) {
      this.toggleEditTaskWindow(status);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form {
  max-width: 440px;
  visibility: hidden;
  bottom: -200px;
  transition: all 200ms linear;

  &--active {
    visibility: visible;
    bottom: 0;
  }
}
</style>
