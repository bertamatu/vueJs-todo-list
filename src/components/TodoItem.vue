<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button @click="$emit('delete-todo', todo.id)" class="delete">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
  .todo-item {
    background: lightgray;
    padding: 10px;
    border-bottom: 1px solid white;
    font-size: 0.7rem;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .delete {
    background: red;
    color: white;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    font-weight: bold;
  }
</style>