<template>
	<div v-show="isActive">
      <slot>
      </slot>
    </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: {
      required: true,
    },
    selected: {
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>