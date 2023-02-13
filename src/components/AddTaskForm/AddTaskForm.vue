<template>
  <form @submit.prevent="saveTask()" class="w-full flex flex-col">
    <label for="description" class="mb-1">Description</label>
    <textarea
      v-model="description"
      type="text"
      name="description"
      placeholder="Description"
      class="border resize-none h-20 mb-4 p-2">
    </textarea>

    <label for="date" class="mb-1">Date</label>
    <input
      v-model="date"
      type="date"
      name="date"
      placeholder="Date"
      class="border h-12 mb-4 p-2">

    <button type="submit">Save</button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AddTaskForm',
  data() {
    return {
      id: undefined,
      description: '',
      date: undefined,
    };
  },
  watch: {
    editingTask(val) {
      if (!val) return;
      this.id = val.id;
      this.description = val.description;
      this.date = val.date;
    },
  },
  computed: {
    ...mapState(['editingTask']),
  },
  methods: {
    ...mapActions(['addTask', 'editTask']),
    saveTask() {
      this.addTask({ description: this.description, date: this.date });
      this.cleanData();
      this.editTask(undefined);
    },
    cleanData() {
      this.id = undefined;
      this.description = '';
      this.date = undefined;
    },
  },
};
</script>
