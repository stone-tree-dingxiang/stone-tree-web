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
    <el-button class="inputArea" type="warning" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginName: "",
      password: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      const params = this.$qs.stringify({
        mobile: 17626048083,
        password: 123456,
      });
      this.$axios.get("http://192.168.31.118/tree/stoneUser/selectAll");
      this.$axios
        .post("http://192.168.31.118/tree/stoneUser/login", params, 
        {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {          
        })
    },
  },
};
</script>

<style lang="less" scoped>
.loginPage {
  .inputArea {
    width: 200px;
    margin-top: 10px;
    display: block;
  }
}
</style>
