<template>
  <section class="fixed left-0 bottom-0 w-full">
    <div class="container mx-auto">
      <div class="relative">
        <button
          id="add-task"
          @click="toggleTask(true)"
          class="absolute right-2 bottom-2 bg-primary hover:bg-opacity-80 text-white rounded-full
          flex items-center justify-center w-14 h-14">
          <span class="material-symbols-outlined">add</span>
        </button>
        <div
          class="task-form absolute right-0 w-full bg-gray rounded p-4"
          :class="{ 'task-form--active': editTaskWindow }">
          <button
            id="close-window"
            @click="toggleTask(false)"
            class="absolute right-4 -top-5 bg-secondary hover:bg-opacity-80 text-white rounded-full
            flex items-center justify-center w-10 h-10 mb-2">
            <span class="material-symbols-outlined">close</span>
          </button>
          <AddTaskForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddTaskForm from '@/components/AddTaskForm.vue';
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
  bottom: -300px;
  transition: all 200ms linear;

  &--active {
    visibility: visible;
    bottom: 0;
  }
}
</style>
