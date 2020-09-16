<template>
  <div class="main-bulma container">
    <tabs>
   </tabs>      
  <message :title="msgtitle" :body="body"></message>

  </div>
</template>

<script>
  import message from "./message.vue";
  import tabs from "./tabs.vue";

export default {
  name: "Bulma",
  
  components: {
    message,
    tabs
  },

  data(){
    return {
      msgtitle: "ding doge",
      body: "this is a test msg body.",
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>