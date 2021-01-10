<template>
  <div class="personalContainer">
    <!-- 顶部头像区域 -->
    <div class="personalBackground">
      <div class="topContent">
        <img class="userLogo" src="../assets/logo.png" alt="头像" />
      </div>
      <div class="topContent">我的名字</div>
      <div class="topContent">介绍一下自己</div>
    </div>
    <!-- 左侧侧边栏 -->
    <el-container class="persionalSideBar">
      <el-aside width="200px" class="leftSideBar">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          router
          :default-active="$route.path"
        >
          <el-menu-item index="/personalContainer">
            <i class="el-icon-menu"></i>
            <span slot="title">动态</span>
          </el-menu-item>
          <el-menu-item index="/personalArticle">
            <i class="el-icon-menu"></i>
            <span slot="title">文章</span>
          </el-menu-item>
          <el-menu-item index="/personalPicture">
            <i class="el-icon-menu"></i>
            <span slot="title">相册</span>
          </el-menu-item>
          <el-menu-item index="/focusEmptyContent">
            <i class="el-icon-menu"></i>
            <span slot="title">关注</span>
          </el-menu-item>
          <el-menu-item index="/fansEmptyContent">
            <i class="el-icon-menu"></i>
            <span slot="title">粉丝</span>
          </el-menu-item>
          <el-menu-item index="/collectEmptyContent">
            <i class="el-icon-menu"></i>
            <span slot="title">收藏</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
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
    background-color: yellowgreen;
    .topContent {
      margin: auto;
      text-align: center;
      .userLogo {
        width: 100px;
        height: 100px;
      }
    }
  }
  .persionalSideBar {
    margin-top: 10px;
  }
}
</style>
