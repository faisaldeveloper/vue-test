<template>
  <div class="main-common">

    <p>{{ msg2 }} </p>

    <div class="demo" 
    @click="attachRed = !attachRed" 
    :class="{red: attachRed}">
    </div>

    <div class="demo" 
    @click="attachGreen = !attachGreen" 
    :class="{green: attachGreen}">
    </div>

    <div class="demo" 
    @click="attachYellow = !attachYellow" 
    :class="{yellow: attachYellow}">
    </div> 

    <div class="demo" 
    :class="dynamic">
    </div>

    <hr>

    <input type="text" name="color" v-model="dynamic">

  </div>
</template>

<script>
export default {
  name: "Common",
  prop:{
    msg2: 'Common Tasks'
  },
  data(){
    return {
      //msg2 : "whats going on guys.",
      attachRed: false,
      attachGreen: false,
      attachYellow: false,
      dynamic: "blue",
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.demo{
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin:10px;
}

.red{
  background-color: red;
}
.green{
  background-color: green;
}
.yellow{
  background-color: yellow;
}
.blue{
  background-color: blue;
}
</style>