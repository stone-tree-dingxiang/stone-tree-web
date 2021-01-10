<template>
  <div class="blogHeader">
    <el-input
      class="search"
      v-model="input"
      placeholder="请输入内容"
    ></el-input>
    <div>
      <router-link tag="span" to="homePageContainer" class="topLink"
        >首页</router-link
      >
      <router-link tag="span" to="personalContainer" class="topLink"
        >个人中心</router-link
      >
      <router-link tag="span" to="13" class="topLink"
        >设置</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { input: "" };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.blogHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333744;
  border-bottom: 1px solid #fff;
  padding: 10px;
  .topLink {
    margin: 10px 5px;
    color: red;
  }
  .search {
    width: 160px;
  }
}
</style>
