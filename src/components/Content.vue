<template>
  <div class="main-content">
    <h1>{{ msg }}</h1> 
    <Todo />
    <Common />
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import Common from "./Common.vue";

export default {
  name: "Content",
  props: {
    msg: String
  },
  components: {
    Todo,
    Common
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>