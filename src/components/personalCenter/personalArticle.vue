<template>
  <BlogContent :showInput="false"></BlogContent>
</template>

<script>
import BlogContent from "../common/blogContent.vue";

export default {
  components: { BlogContent },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.personalContainer {
  .personalBackground {
    height: 300px;
  }
}
</style>
