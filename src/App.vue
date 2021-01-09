<template>
  <div id="app">
    <BlogHeader class="mainContent"></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from "./components/header.vue";

export default {
  components: { BlogHeader },
  name: "app",
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
  /* padding: 0 calc(100% - 460px); */
}
</style>
