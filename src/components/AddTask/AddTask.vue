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
          class="task-form absolute right-0 w-full"
          :class="{ 'task-form--active': active }">
          <AddTaskForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from '@/components/AddTaskForm/AddTaskForm.vue';

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
  methods: {
    toggleTask() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form {
  max-width: 440px;
  visibility: hidden;
  bottom: -500px;
  transition: all 500ms linear;

  &--active {
    visibility: visible;
    bottom: 50px;
  }
}
</style>
