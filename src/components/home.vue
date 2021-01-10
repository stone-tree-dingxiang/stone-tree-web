<template>
  <div>
    <BlogHeader class="mainContent"></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from "./header.vue";

export default {
  components: { BlogHeader },
};
</script>

<style>
body {
  margin: 0;
  background-color: pink;
}
#app {
  height: 100%;
  margin: auto;
  width: 920px;
}
</style>
