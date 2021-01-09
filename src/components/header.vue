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
      <el-button :to="{ name: homePageContainer }" type="info">首页</el-button>
      <el-button index="/serContainer" type="info">个人中心</el-button>
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
  .topLink {
    margin: 10px 5px;
    color: red;
  }
  .search {
    width: 160px;
  }
}
</style>
