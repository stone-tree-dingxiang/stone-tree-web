<template>
  <el-container class="homeSideBar">
    <el-aside width="200px">
      <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409eff"
        unique-opened
        router
        :default-active="$route.path"
      >
        <el-menu-item index="/homePageContainer">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/qqq">
          <i class="el-icon-menu"></i>
          <span slot="title">测试一</span>
        </el-menu-item>
        <el-menu-item index="/qq2">
          <i class="el-icon-menu"></i>
          <span slot="title">测试二</span>
        </el-menu-item>
        <el-menu-item index="/www">
          <i class="el-icon-menu"></i>
          <span slot="title">测试三</span>
        </el-menu-item>
        <el-menu-item index="/ww2">
          <i class="el-icon-menu"></i>
          <span slot="title">测试四</span>
        </el-menu-item>
        <el-menu-item index="/eee">
          <i class="el-icon-menu"></i>
          <span slot="title">测试五</span>
        </el-menu-item>
        <el-menu-item index="/ee2">
          <i class="el-icon-menu"></i>
          <span slot="title">测试六</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <router-view></router-view>
  </el-container>
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

<style lang="less" scoped></style>
