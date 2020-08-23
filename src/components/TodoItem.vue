<template>
  <div class="todo-item">
    <p>{{todo.title}}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  background: lightgray;
  padding: 10px;
  border-bottom: 1px solid white;
}
</style>