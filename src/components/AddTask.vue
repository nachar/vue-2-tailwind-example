<template>
  <div>
    <form action="">
      <label for="description">Description</label>
      <input type="text" name="description" placeholder="Description" class="border">

      <label for="date">Description</label>
      <input type="date" name="date" placeholder="Date" class="border">
    </form>

    <button>+</button>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
};
</script>
