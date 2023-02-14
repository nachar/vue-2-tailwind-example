<template>
  <div id="app" class="container min-h-screen mx-auto px-4 pt-8 pb-20">
    <FilterList />
    <ToDoList />
    <AddTask />
  </div>
</template>

<script>
import FilterList from '@/components/FilterList/FilterList.vue';
import ToDoList from '@/components/ToDoList/ToDoList.vue';
import AddTask from '@/components/AddTask/AddTask.vue';

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
