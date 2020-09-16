<template>
  <div class="main-todo message">

    <article class="message">
  <div class="message-header">
    <p>{{ title }}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">{{body}}</div>
</article>

  </div>
</template>

<script>
export default {
  name: "message",
  props: {
  	title: String,
  	body: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.message{
	padding-top: 5px;
}

</style>
