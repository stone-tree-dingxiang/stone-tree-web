<template>
  <div class="personalPicture">
    <div class="personalPictureCotent">
      <div class="dateTime">1月</div>
      <div><img class="picture" src="../../assets/foods.jpg" alt="博客" /></div>
    </div>
    <div class="personalPictureCotent">
      <div class="dateTime">2月</div>
      <div><img class="picture" src="../../assets/home.jpg" alt="博客" /></div>
    </div>
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
.personalPicture {
  width: 100%;
  .personalPictureCotent {
    padding-left: 20px;
    background-color: #fff;
    .dateTime{
      padding: 10px 0;
    }
    .picture {
      width: 200px;
    }
  }
}
</style>
