<template>
  <div
    v-if="deletingTask"
    class="modal-delete fixed top-0 left-0 w-full min-h-full
  flex items-center justify-center bg-dark-opacity">
    <div class="modal-delete__content bg-white rounded w-full max-w-screen-sm
    text-center px-4 py-10">
      <p class="mb-10">Are you sure you want to delete this task?</p>
      <button
        id="cancel-deleting-task"
        @click="cleanDeletingTask()"
        class="mr-10 bg-dark-gray text-white w-1/4 rounded py-2 hover:bg-opacity-80">
        No
      </button>
      <button
        id="delete-task"
        @click="deleteCurrentTask()"
        class="bg-secondary text-white w-1/4 rounded py-2 hover:bg-opacity-80">
        Yes
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ModalDelete',
  computed: {
    ...mapState(['deletingTask']),
  },
  methods: {
    ...mapActions(['deleteTask', 'selectDeletingTask']),
    cleanDeletingTask() {
      this.selectDeletingTask(undefined);
    },
    deleteCurrentTask() {
      this.deleteTask();
    },
  },
};
</script>
