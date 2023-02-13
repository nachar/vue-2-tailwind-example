<template>
  <ul class="py-8">
    <p v-if="!tasks.length">Please add a new task</p>
    <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskComponent from '@/components/TaskComponent/TaskComponent.vue';
import { mapState } from 'vuex';

export default {
  name: 'ToDoList',
  components: {
    TaskComponent,
  },
  computed: {
    ...mapState(['tasks']),
  },
};
</script>
