<template>
  <li class="border-r">
    <button>{{ name }}</button>
  </li>
</template>

<script>
export default {
  name: 'FilterListItem',
  props: {
    name: {
      require: true,
      type: String,
    },
  },
};
</script>
