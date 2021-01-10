<template>
  <div class="homePageContainer">
    <!-- 顶部发布动态区域 -->
    <div class="topSearch" v-if="showInput">
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
        <div class="leftIcon">
          <i class="el-icon-picture-outline elIcon"
            ><span class="leftTip">图片</span></i
          >
          <i class="el-icon-document elIcon"
            ><span class="leftTip">文章</span></i
          >
        </div>
        <div class="rightPublish">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary">发布</el-button>
        </div>
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
          <div class="blogContent">
            {{ this.shortBlogContents }}
            <span class="showopenCloseArticle">
              <span
                class="openCloseArticle"
                @click="openArticle"
                v-if="showOpenArticle && isArticle"
                >展开全文 <i class="el-icon-arrow-down"></i
              ></span>
              <span
                class="openCloseArticle"
                @click="closeArticle"
                v-if="!showOpenArticle && isArticle"
                >收起全文 <i class="el-icon-arrow-up"></i
              ></span>
            </span>
          </div>
          <!-- 头像 -->
          <div class="blogPicture">
            <img src="../../assets/home.jpg" alt="博客" />
          </div>
        </div>
      </div>
      <!-- 按钮区域 -->
      <div class="bottomButton" v-if="false">
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
          <div class="blogContent">
            {{ this.shortBlogContents }}
            <span class="showopenCloseArticle">
              <span
                class="openCloseArticle"
                @click="openArticle"
                v-if="showOpenArticle && isArticle"
                >展开全文 <i class="el-icon-arrow-down"></i
              ></span>
              <span
                class="openCloseArticle"
                @click="closeArticle"
                v-if="!showOpenArticle && isArticle"
                >收起全文 <i class="el-icon-arrow-up"></i
              ></span>
            </span>
          </div>
          <!-- 头像 -->
          <div class="blogPicture">
            <img src="../../assets/home.jpg" alt="博客" />
          </div>
        </div>
      </div>
      <!-- 按钮区域 -->
      <div class="bottomButton" v-if="false">
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
  props: {
    showInput: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      count: 0,
      // 顶部input区域
      textarea: "",
      // 是否需要做文章的截取
      showopenCloseArticle: false,
      // 是否显示展示全文
      showOpenArticle: true,
      // 公开和隐私的下拉框
      value: "open",
      options: [
        {
          label: "公开",
          value: "open",
        },
        {
          label: "隐私",
          value: "privacy",
        },
      ],
      // 截取前200个字
      shortBlogContents: "",
      // 是否是文章
      isArticle: true,
      // 博客的内容
      blogContents:
        "对这些“明星太太”，郑爷爷全都认真回复了一番，因为她们都是不能怠慢的“芳龄富婆”，笑死了，之前觉得童话大王永葆童心太可爱了，现在真的感觉他也是一个好浪漫的人啊，从没想到芳龄跟富婆两个词还能连起来这么用，听上去还这么的有趣",
    };
  },
  created() {
    // 超过50个字用...
    this.isArticle = this.blogContents.length > 50 ? true : false;
    this.shortBlogContents = this.isArticle
      ? `${this.blogContents.slice(0, 50)}...`
      : this.blogContents;
    this.showopenCloseArticle = this.blogContents.length > 50 ? true : false;
  },
  mounted() {},
  methods: {
    openArticle() {
      this.showOpenArticle = false;
      this.shortBlogContents = this.blogContents;
    },
    closeArticle() {
      this.showOpenArticle = true;
      this.shortBlogContents = `${this.blogContents.slice(0, 50)}...`;
    },
    load() {
      this.count += 2;
    },
  },
};
</script>

<style lang="less" scoped>
.homePageContainer {
  .topSearch {
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
    .textarea {
      margin: 20px 0;
    }
    .topButton {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 40px;
      line-height: 40px;
      .leftIcon {
        .elIcon {
          margin-right: 20px;
          .leftTip {
            margin-left: 10px;
          }
        }
      }
      .rightPublish {
        /deep/.el-select {
          .el-input {
            .el-input__inner {
              border: none;
              width: 70px;
              padding-right: 0;
            }
          }
        }
      }
    }
  }
  .content {
    padding: 20px;
    background: #fff;
    margin-bottom: 10px;
    .userBlog {
      display: flex;
      justify-content: space-between;
      .userPicture img {
        width: 50px;
        height: 50px;
      }
      .userShares {
        margin-left: 10px;
        .blogContent {
          .openCloseArticle {
            display: inline-block;
          }
        }
        .blogPicture {
          padding: 10px 0;
          img {
            height: 167px;
          }
        }
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
