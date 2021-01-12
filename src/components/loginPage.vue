<template>
  <div class="loginPage">
    <el-input
      class="inputArea"
      v-model="loginName"
      placeholder="请输入登录名"
    ></el-input>
    <el-input
      class="inputArea"
      v-model="password"
      placeholder="请输入密码"
    ></el-input>
    <div class="tips">{{ pleaseEnter }}</div>
    <el-button class="inputArea loginArea" type="warning" @click="login"
      >登录</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginName: "",
      password: "",
      pleaseEnter: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      debugger;
      if (!this.loginName.length) {
        this.pleaseEnter = "请输入用户名";
        return;
      } else if (!this.password.length) {
        this.pleaseEnter = "请输入密码";
        return;
      }
      this.pleaseEnter = "";
      const params = this.$qs.stringify({
        mobile: 17626048083,
        password: 123456,
      });
      this.$axios.get("http://192.168.31.118/tree/stoneUser/selectAll");
      this.$axios
        .post("http://192.168.31.118/tree/stoneUser/login", params, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {});
    },
  },
};
</script>

<style lang="less" scoped>
.loginPage {
  .inputArea {
    width: 200px;
    margin-top: 30px;
    display: block;
    &.loginArea {
      margin-top: 20px;
    }
  }
  .tips {
    height: 10px;
    line-height: 30px;
    font-size: 14px;
    color: red;
  }
}
</style>
