<template>
  <div>
    <FilterList />
    <div id="app" class="container min-h-screen mx-auto px-4 pb-20">
      <ToDoList />
      <AddTask />
    </div>
    <ModalDelete />
  </div>
</template>

<script>
import FilterList from '@/components/FilterList.vue';
import ToDoList from '@/components/ToDoList.vue';
import AddTask from '@/components/AddTask.vue';
import ModalDelete from '@/components/ModalDelete.vue';

export default {
  name: 'App',
  components: {
    FilterList,
    ToDoList,
    AddTask,
    ModalDelete,
  },
};
</script>

<style lang="scss">
@import "./style/theme";
</style>
