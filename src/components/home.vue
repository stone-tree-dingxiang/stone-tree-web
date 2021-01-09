<template>
  <el-container style="height: 100vh">
    <el-header>
      <div></div>
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container class="zmain">
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          router
          :default-active="$route.path"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <el-menu-item index="/qqq">选项1</el-menu-item>
              <el-menu-item index="/qq2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <el-menu-item index="/www">选项1</el-menu-item>
              <el-menu-item index="/ww2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <el-menu-item index="/eee">选项1</el-menu-item>
              <el-menu-item index="/ee2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
    // // 浏览器前进后退侧边栏样式变化
    // let that = this;
    // window.addEventListener(
    //   "popstate",
    //   //   监听地址栏
    //   (window.onhashchange = function(e) {
    //     const str = e.newURL + "";
    //     that.activePath = str.substring(str.length - 4);
    //     // console.log("aaa");
    //   })
    // );
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
// .el-container {
// //   height: 100%;
// }
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  background-color: #b3c0d1;
  > div {
    margin: 10px 5px;
    width: 180px;
    background-color: #fff;
  }
  .el-button {
    margin: 10px 5px;
  }
}
.zmain {
  height: calc(100vh-60px);
  overflow-y: scroll;
}
.el-aside {
  // height: 100%;
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

// 隐藏滚动条
.el-container {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.el-container::-webkit-scrollbar {
  width: 0 !important;
}
</style>