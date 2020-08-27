<template>
  <div id="app">
    <Header />
    <AddTodo  v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header"
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"
import axios from "axios"

export default {
  name: "App",
  components: { Header, Todos, AddTodo },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo];
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=11')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err))
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
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}
@media (max-width: 768px) {
  body {
    padding: 50px 100px;
  }
}
</style>
