<template>
  <div class="fixed left-0 bottom-0 w-full">
    <div class="container mx-auto">
      <div class="relative">
        <button
          @click="toggleTask()"
          class="absolute right-0 bottom-0 p-6 rounded-full">
          <span v-if="active">x</span>
          <span v-else>+</span>
        </button>
        <div
          class="task-form absolute right-0 w-full bg-gray-100 rounded p-4"
          :class="{ 'task-form--active': active }">
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
  data() {
    return {
      active: false,
    };
  },
  watch: {
    editingTask(val) {
      this.active = !!val;
    },
    tasks() {
      this.toggleTask();
    },
  },
  computed: {
    ...mapState(['editingTask', 'tasks']),
  },
  methods: {
    ...mapActions(['selectEditingTask']),
    toggleTask() {
      this.active = !this.active;
      if (!this.active) this.selectEditingTask(undefined);
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
    bottom: 68px;
  }
}
</style>
