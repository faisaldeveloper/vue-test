<template>
  <div class="main-content">
    <!-- Routes get rendered here -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Content",

  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>