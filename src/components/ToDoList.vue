<template>
  <ul>
    <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskComponent from '@/components/TaskComponent.vue';
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
