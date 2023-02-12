<template>
  <form @submit.prevent="saveTask()" class="w-full flex flex-col">
    <label for="description">Description</label>
    <input
      v-model="description"
      type="text"
      name="description"
      placeholder="Description"
      class="border">

    <label for="date">Date</label>
    <input
      v-model="date"
      type="date"
      name="date"
      placeholder="Date"
      class="border">

    <button type="submit">Save</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTaskForm',
  data() {
    return {
      id: undefined,
      description: '',
      date: undefined,
    };
  },
  methods: {
    ...mapActions(['addTask']),
    saveTask() {
      this.addTask({ description: this.description, date: this.date });
      this.cleanData();
    },
    cleanData() {
      this.id = undefined;
      this.description = '';
      this.date = undefined;
    },
  },
};
</script>
