<template>
  <div id="app" class="container mx-auto px-4">
    <FilterList />
    <ToDoList />
    <AddTask />
  </div>
</template>

<script>
import FilterList from '@/components/FilterList.vue';
import ToDoList from '@/components/ToDoList.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  name: 'App',
  components: {
    FilterList,
    ToDoList,
    AddTask,
  },
};
</script>

<style lang="scss">
@import "./style/theme";
</style>
