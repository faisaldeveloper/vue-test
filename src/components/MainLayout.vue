<template>
  <div id="main-app">
    <Header msg="Welcome to Todo App" />
    <Content sg="Welcome 2 Todo App" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Content from "./Content.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Content
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>