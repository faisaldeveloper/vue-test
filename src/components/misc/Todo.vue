<template>
  <div class="main-todo">
    <h1>{{ msg }}</h1> 
    <p>This is todo page.</p>
    <button @click="send">Send msg</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    msg: String
  },
  methods:{
  	send(){
  		//alert('I am clicked.');
  		this.$emit('commsg', 'Message from TODO component');
  	}
  	//$emit('commsg', 'Message from about us component')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
