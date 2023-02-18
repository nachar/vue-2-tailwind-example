<template>
  <ValidationObserver v-slot="{ handleSubmit, reset, invalid }">
    <form
      @submit.prevent="handleSubmit(saveTask)"
      @reset.prevent="reset"
      class="w-full flex flex-col">
      <label for="description" class="mb-1">Description</label>
      <ValidationProvider rules="required" v-slot="{ errors }" class="mb-4">
      <textarea
        v-model="description"
        type="text"
        name="description"
        placeholder="Description"
        class="border w-full resize-none h-20 p-2"></textarea>
        <span class="text-sm text-tertiary" v-if="errors[0]">
          Description field is required
        </span>
      </ValidationProvider>

      <label for="date" class="mb-1">Compliance date</label>

      <ValidationProvider rules="required" v-slot="{ errors }" class="mb-4">
        <input
          v-model="date"
          type="date"
          name="date"
          placeholder="Date"
          class="border w-full h-12 mb-4 p-2">
        <span class="text-sm text-tertiary" v-if="errors[0]">
          Date field is required
        </span>
      </ValidationProvider>

      <button type="reset" class="hidden" ref="reset">>Reset</button>
      <button
        id="submit-button"
        type="submit"
        :disabled="invalid"
        class="bg-secondary disabled:bg-dark-gray text-white w-1/2
         mx-auto rounded hover:bg-opacity-80 py-2">
        Save
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AddTaskForm',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      id: undefined,
      description: '',
      date: undefined,
    };
  },
  watch: {
    editingTask(val) {
      const currentData = val || { id: undefined, description: '', date: undefined };
      this.setData(currentData);
    },
  },
  computed: {
    ...mapState(['editingTask']),
  },
  methods: {
    ...mapActions(['addTask', 'selectEditingTask', 'editTask']),
    saveTask() {
      if (this.id) {
        this.editTask({ id: this.id, description: this.description, date: this.date });
      } else {
        this.addTask({ description: this.description, date: this.date });
      }
      this.setData({ id: undefined, description: '', date: undefined });

      this.$refs.reset.click();
    },
    setData({ id, description, date }) {
      this.id = id;
      this.description = description;
      this.date = date;
    },
  },
};
</script>
