<template>
  <div id="app">{{msg}}</div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      todo: [{}, {}, {}]
    };
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
}
</style>
