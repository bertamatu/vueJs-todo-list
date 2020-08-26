<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header"
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"

export default {
  name: "App",
  components: { Header, Todos, AddTodo },
  data() {
    return {
      todos: [
        { id: 1, title: "Todo One", completed: false },
        { id: 2, title: "Todo Two", completed: true },
        { id: 3, title: "Todo Three", completed: false }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo];
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.4;
  padding: 50px 400px;
}
@media (max-width: 768px) {
  body {
    padding: 50px 100px;
  }
}
</style>
