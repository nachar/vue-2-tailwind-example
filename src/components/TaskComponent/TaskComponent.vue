<template>
  <li>
    <p><span>{{ task.id }} </span>{{ task.description }}</p>
  </li>
</template>

<script>
export default {
  name: 'TaskComponent',
  props: {
    task: {
      require: true,
      type: Object,
    },
  },
};
</script>
