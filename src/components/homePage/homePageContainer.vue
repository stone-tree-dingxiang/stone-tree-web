<template>
  <BlogContent :showInput="true"></BlogContent>
</template>

<script>
import BlogContent from "../common/blogContent.vue";
export default {
  components: { BlogContent },
  data() {
    return {
      textarea: "",
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
