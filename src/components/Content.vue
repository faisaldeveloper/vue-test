<template>
  <div class="main-content">
    <!-- Routes get rendered here -->
    <router-view @commsg="updateme"></router-view>
    <br><br>
    <p>{{ rootmsg }}</p>
  </div>
</template>

<script>

export default {
  name: "Content",

  props: {
    msg: String
  },
  data(){
    return {
      rootmsg: "This is Content component"
    }
  },
  methods: {
    updateme(x){
      //this.myvar = 'nodatinedddd';
      //alert('I am updating.'+x);
      this.rootmsg = x;
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