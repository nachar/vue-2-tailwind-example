<template>
  <ul class="py-8">
    <li id="without-tasks" v-if="!filteredTasks.length">
      <p>Please add a new task</p>
    </li>
    <TaskComponent v-for="task in filteredTasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskComponent from '@/components/TaskComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ToDoList',
  components: {
    TaskComponent,
  },
  computed: {
    ...mapGetters(['filteredTasks']),
  },
};
</script>
