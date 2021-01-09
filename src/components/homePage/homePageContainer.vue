<template>
  <div class="homePageContainer">
    <!-- 顶部发布动态区域 -->
    <div class="topSearch">
      <div>有什么新鲜的事情要分享给大家？</div>
      <el-input
        class="textarea"
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <div class="topButton">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <!-- 动态内容区域 -->
    <div class="content">
      <div class="userBlog">
        <!-- 头像 -->
        <div class="userPicture">
          <img src="../../assets/logo.png" alt="头像" />
        </div>
        <!-- 内容 -->
        <div class="userShares">
          12313213123211 231321312321 1231321312321 123132131 2321 1231321312321
          1231321312321 12313213 123211231321312321 1231321312321 1231321312321
          1231321312321 123132 13123211 23132131232112 31321312321 1231321312321
          1231321312321 1231321312321 123132131 2321123132 131232 11231321312321
          1231321312321 1231321312321 1231321312321 123132131232 112313213123211
          231321312321 1231321312321 1231321312321 1231321312321 1231321312321
        </div>
      </div>
      <!-- 按钮区域 -->
      <div class="bottomButton">
        <i class="el-icon-star-off">收藏</i>
        <i class="el-icon-position">转发</i>
        <i class="el-icon-chat-dot-square">评论</i>
        <i class="el-icon-lollipop">点赞</i>
      </div>
    </div>
    <!-- 动态内容区域 -->
    <div class="content">
      <div class="userBlog">
        <!-- 头像 -->
        <div class="userPicture">
          <img src="../../assets/logo.png" alt="头像" />
        </div>
        <!-- 内容 -->
        <div class="userShares">
          12313213123211 231321312321 1231321312321 123132131 2321 1231321312321
          1231321312321 12313213 123211231321312321 1231321312321 1231321312321
          1231321312321 123132 13123211 23132131232112 31321312321 1231321312321
          1231321312321 1231321312321 123132131 2321123132 131232 11231321312321
          1231321312321 1231321312321 1231321312321 123132131232 112313213123211
          231321312321 1231321312321 1231321312321 1231321312321 1231321312321
        </div>
      </div>
      <!-- 按钮区域 -->
      <div class="bottomButton">
        <i class="el-icon-star-off">收藏</i>
        <i class="el-icon-position">转发</i>
        <i class="el-icon-chat-dot-square">评论</i>
        <i class="el-icon-lollipop">点赞</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.homePageContainer {
  .topSearch {
    background: #fff;
    padding: 20px;
    .textarea {
      margin: 20px 0;
    }
    .topButton {
      display: flex;
      justify-content: flex-end;
    }
  }
  .content {
    padding: 20px;
    background: #fff;
    margin-top: 10px;
    .userBlog {
      display: flex;
      justify-content: space-between;
      .userPicture img {
        width: 50px;
        height: 50px;
      }
      .userShares {
        margin-left: 10px;
      }
    }
    .bottomButton {
      margin-top: 20px;
      padding: 0 100px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
