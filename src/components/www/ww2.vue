<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
      <el-step title="步骤 4"></el-step>
      <el-step title="步骤 5"></el-step>
    </el-steps>
    <div>
      <el-tooltip class="item" effect="dark" content="点击就是点击" placement="bottom">
        <el-button style="margin-top: 12px;" @click="last">上一步</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="要什么提示" placement="bottom">
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </el-tooltip>
    </div>

    <el-timeline style="margin-top:40px; width: 25%;float: left">
      <el-timeline-item
        style="height: 100px"
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
    <el-calendar v-model="value" style="margin-top:30px; float: left;width: 70% "></el-calendar>
    <br clear="all" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      value: new Date(),
      activities: [
        {
          content: "你好坏哦",
          timestamp: "2020-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-aim"
        },
        {
          content: "我好喜欢",
          timestamp: "2020-04-03 20:46",
          size: "large",
          type: "warning",
          icon: "el-icon-view"
        },
        {
          content: "羞答答",
          timestamp: "2020-04-03 20:46",
          size: "large",
          type: "success",
          icon: "el-icon-star-off"
        },
        {
          content: "蠢呆呆",
          timestamp: "2020-04-03 20:46",
          type: "primary",
          size: "large",
          icon: "el-icon-star-off"
        },
        {
          content: "咿呀嘿",
          timestamp: "2020-04-03 20:46",
          size: "large",
          type: "danger",
          icon: "el-icon-circle-close"
        },
        {
          content: "咿呀哟",
          timestamp: "2020-04-03 20:46",
          size: "large",
          type: "danger",
          icon: "el-icon-circle-close"
        },
      ]
    };
  },

  methods: {
    last() {
      if (this.active-- < 0) this.active = 4;
    },
    next() {
      if (this.active++ > 4) this.active = 0;
    }
  }
};
</script>

<style lang="less" scoped>
</style>