<template>
  <div class="bigBox">
    <div style="padding: 10px 0 0 10px">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/qqq' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center;font-size:20px">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        accept=".xlsx, .txt"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <br clear="all" />
    <div id="showTime"></div>
    <div id="hint" style="display:none;color:red">这次我只要体彩大乐透</div>
    <div>双色球</div>
    <el-button @click="createCode(6)">前区</el-button>
    <el-button @click="createCode(1)">后区</el-button>
    <el-button @click="clearCodes(1)">清空</el-button>
    <el-button id="ssq">选择次数：{{fuli}}</el-button>
    <div>
      <span style="color: red">{{code1}}</span>
      <span style="color: blue">{{code2}}</span>
    </div>
    <div>大乐透</div>
    <el-button @click="createCode(5)">前区</el-button>
    <el-button @click="createCode(2)">后区</el-button>
    <el-button @click="clearCodes(2)">清空</el-button>
    <el-button id="dlt">选择次数：{{ticai}}</el-button>
    <div>
      <span style="color: red">{{code3}}</span>
      <span style="color: blue">{{code4}}</span>
    </div>
    <!-- <el-button @click="aaa($event)">试试</el-button> -->
    <div>双色球前区统计结果</div>
    <el-table style="width: 100%" :data="tableDataa">
      <el-table-column prop="a1" label=" "></el-table-column>
      <el-table-column prop="a2" label="1"></el-table-column>
      <el-table-column prop="a3" label="2"></el-table-column>
      <el-table-column prop="a4" label="3"></el-table-column>
      <el-table-column prop="a5" label="4"></el-table-column>
      <el-table-column prop="a6" label="5"></el-table-column>
      <el-table-column prop="a7" label="6"></el-table-column>
      <el-table-column prop="a8" label="7"></el-table-column>
      <el-table-column prop="a9" label="8"></el-table-column>
      <el-table-column prop="a10" label="9"></el-table-column>
      <el-table-column prop="a11" label="10"></el-table-column>
      <el-table-column prop="a12" label="11"></el-table-column>
      <el-table-column prop="a13" label="12"></el-table-column>
      <el-table-column prop="a14" label="13"></el-table-column>
      <el-table-column prop="a15" label="14"></el-table-column>
      <el-table-column prop="a16" label="15"></el-table-column>
      <el-table-column prop="a17" label="16"></el-table-column>
      <el-table-column prop="a18" label="17"></el-table-column>
      <el-table-column prop="a19" label="18"></el-table-column>
      <el-table-column prop="a20" label="19"></el-table-column>
      <el-table-column prop="a21" label="20"></el-table-column>
      <el-table-column prop="a22" label="21"></el-table-column>
      <el-table-column prop="a23" label="22"></el-table-column>
      <el-table-column prop="a24" label="23"></el-table-column>
      <el-table-column prop="a25" label="24"></el-table-column>
      <el-table-column prop="a26" label="25"></el-table-column>
      <el-table-column prop="a27" label="26"></el-table-column>
      <el-table-column prop="a28" label="27"></el-table-column>
      <el-table-column prop="a29" label="28"></el-table-column>
      <el-table-column prop="a30" label="29"></el-table-column>
      <el-table-column prop="a31" label="30"></el-table-column>
      <el-table-column prop="a32" label="31"></el-table-column>
      <el-table-column prop="a33" label="32"></el-table-column>
      <el-table-column prop="a34" label="33"></el-table-column>
    </el-table>
    <div>双色球后区统计结果</div>
    <el-table style="width: 100%" :data="tableDatab">
      <el-table-column prop="b1" label=" "></el-table-column>
      <el-table-column prop="b2" label="1"></el-table-column>
      <el-table-column prop="b3" label="2"></el-table-column>
      <el-table-column prop="b4" label="3"></el-table-column>
      <el-table-column prop="b5" label="4"></el-table-column>
      <el-table-column prop="b6" label="5"></el-table-column>
      <el-table-column prop="b7" label="6"></el-table-column>
      <el-table-column prop="b8" label="7"></el-table-column>
      <el-table-column prop="b9" label="8"></el-table-column>
      <el-table-column prop="b10" label="9"></el-table-column>
      <el-table-column prop="b11" label="10"></el-table-column>
      <el-table-column prop="b12" label="11"></el-table-column>
      <el-table-column prop="b13" label="12"></el-table-column>
      <el-table-column prop="b14" label="13"></el-table-column>
      <el-table-column prop="b15" label="14"></el-table-column>
      <el-table-column prop="b16" label="15"></el-table-column>
      <el-table-column prop="b17" label="16"></el-table-column>
    </el-table>
    <div>大乐透前区统计结果</div>
    <el-table style="width: 100%" :data="tableDatac">
      <el-table-column prop="c1" label=" "></el-table-column>
      <el-table-column prop="c2" label="1"></el-table-column>
      <el-table-column prop="c3" label="2"></el-table-column>
      <el-table-column prop="c4" label="3"></el-table-column>
      <el-table-column prop="c5" label="4"></el-table-column>
      <el-table-column prop="c6" label="5"></el-table-column>
      <el-table-column prop="c7" label="6"></el-table-column>
      <el-table-column prop="c8" label="7"></el-table-column>
      <el-table-column prop="c9" label="8"></el-table-column>
      <el-table-column prop="c10" label="9"></el-table-column>
      <el-table-column prop="c11" label="10"></el-table-column>
      <el-table-column prop="c12" label="11"></el-table-column>
      <el-table-column prop="c13" label="12"></el-table-column>
      <el-table-column prop="c14" label="13"></el-table-column>
      <el-table-column prop="c15" label="14"></el-table-column>
      <el-table-column prop="c16" label="15"></el-table-column>
      <el-table-column prop="c17" label="16"></el-table-column>
      <el-table-column prop="c18" label="17"></el-table-column>
      <el-table-column prop="c19" label="18"></el-table-column>
      <el-table-column prop="c20" label="19"></el-table-column>
      <el-table-column prop="c21" label="20"></el-table-column>
      <el-table-column prop="c22" label="21"></el-table-column>
      <el-table-column prop="c23" label="22"></el-table-column>
      <el-table-column prop="c24" label="23"></el-table-column>
      <el-table-column prop="c25" label="24"></el-table-column>
      <el-table-column prop="c26" label="25"></el-table-column>
      <el-table-column prop="c27" label="26"></el-table-column>
      <el-table-column prop="c28" label="27"></el-table-column>
      <el-table-column prop="c29" label="28"></el-table-column>
      <el-table-column prop="c30" label="29"></el-table-column>
      <el-table-column prop="c31" label="30"></el-table-column>
      <el-table-column prop="c32" label="31"></el-table-column>
      <el-table-column prop="c33" label="32"></el-table-column>
      <el-table-column prop="c34" label="33"></el-table-column>
      <el-table-column prop="c35" label="34"></el-table-column>
      <el-table-column prop="c36" label="35"></el-table-column>
    </el-table>
    <div>大乐透后区统计结果</div>
    <el-table style="width: 100%" :data="tableDatad">
      <el-table-column prop="d1" label=" "></el-table-column>
      <el-table-column prop="d2" label="1"></el-table-column>
      <el-table-column prop="d3" label="2"></el-table-column>
      <el-table-column prop="d4" label="3"></el-table-column>
      <el-table-column prop="d5" label="4"></el-table-column>
      <el-table-column prop="d6" label="5"></el-table-column>
      <el-table-column prop="d7" label="6"></el-table-column>
      <el-table-column prop="d8" label="7"></el-table-column>
      <el-table-column prop="d9" label="8"></el-table-column>
      <el-table-column prop="d10" label="9"></el-table-column>
      <el-table-column prop="d11" label="10"></el-table-column>
      <el-table-column prop="d12" label="11"></el-table-column>
      <el-table-column prop="d13" label="12"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        //5 7 8  6 4    1 9 2 3 5
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      fuli: 0,
      ticai: 0,
      t: "",
      tableDataa: [
        {
          a1: "出现次数",
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
          a6: 0,
          a7: 0,
          a8: 0,
          a9: 0,
          a10: 0,
          a11: 0,
          a12: 0,
          a13: 0,
          a14: 0,
          a15: 0,
          a16: 0,
          a17: 0,
          a18: 0,
          a19: 0,
          a20: 0,
          a21: 0,
          a22: 0,
          a23: 0,
          a24: 0,
          a25: 0,
          a26: 0,
          a27: 0,
          a28: 0,
          a29: 0,
          a30: 0,
          a31: 0,
          a32: 0,
          a33: 0,
          a34: 0
        }
      ],
      tableDatab: [
        {
          b1: "出现次数",
          b2: 0,
          b3: 0,
          b4: 0,
          b5: 0,
          b6: 0,
          b7: 0,
          b8: 0,
          b9: 0,
          b10: 0,
          b11: 0,
          b12: 0,
          b13: 0,
          b14: 0,
          b15: 0,
          b16: 0,
          b17: 0
        }
      ],
      tableDatac: [
        {
          c1: "出现次数",
          c2: 0,
          c3: 0,
          c4: 0,
          c5: 0,
          c6: 0,
          c7: 0,
          c8: 0,
          c9: 0,
          c10: 0,
          c11: 0,
          c12: 0,
          c13: 0,
          c14: 0,
          c15: 0,
          c16: 0,
          c17: 0,
          c18: 0,
          c19: 0,
          c20: 0,
          c21: 0,
          c22: 0,
          c23: 0,
          c24: 0,
          c25: 0,
          c26: 0,
          c27: 0,
          c28: 0,
          c29: 0,
          c30: 0,
          c31: 0,
          c32: 0,
          c33: 0,
          c34: 0,
          c35: 0,
          c36: 0
        }
      ],
      tableDatad: [
        {
          d1: "出现次数",
          d2: 0,
          d3: 0,
          d4: 0,
          d5: 0,
          d6: 0,
          d7: 0,
          d8: 0,
          d9: 0,
          d10: 0,
          d11: 0,
          d12: 0,
          d13: 0
        }
      ],
    };
  },
  created() {
    this.showTime();
  },
  methods: {
    submitForm() {
      this.$refs.ruleFormRef.validate(valid => {
        if (valid) {
          alert(this.ruleForm.name);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    aaa(a) {
      console.log(a.toElement.innerText);
      a.toElement.innerText = "乖乖";
    },
    resetForm() {
      this.$refs.ruleFormRef.resetFields();
    },
    showTime() {
      setInterval(function() {
        let dt = new Date();
        const h = (dt.getHours() + "").padStart(2, "0");
        const m = (dt.getMinutes() + "").padStart(2, "0");
        const s = (dt.getSeconds() + "").padStart(2, "0");
        let a = `${h}:${m}:${s}`;
        document.getElementById("showTime").innerHTML =
          // "如今的时间为：" + h + "时" + m + "分" + s + "秒";
          `如今的时间为: ${a}`;

        if (a == "17:50:00") {
          document.getElementById("hint").style.display = "block";
        }
        if (a == "18:00:00") {
          document.getElementById("hint").style.display = "none";
        }
      }, 1000);
    },
    createCode(codeLength) {
      if (codeLength == 6) {
        if (this.code1.length !== 0) {
          if (this.code2.length == 0) {
            this.$message.warning("请选择后区号码！");
            return;
          }
          this.$message.error("请先清空上次的双色球！");
          return;
        }
        let random = new Array(
          "1 ",
          "2 ",
          "3 ",
          "4 ",
          "5 ",
          "6 ",
          "7 ",
          "8 ",
          "9 ",
          "10 ",
          "11 ",
          "12 ",
          "13 ",
          "14 ",
          "15 ",
          "16 ",
          "17 ",
          "18 ",
          "19 ",
          "20 ",
          "21 ",
          "22 ",
          "23 ",
          "24 ",
          "25 ",
          "26 ",
          "27 ",
          "28 ",
          "29 ",
          "30 ",
          "31 ",
          "32 ",
          "33 "
        );
        for (let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random() * random.length);
          this.code1 += random[index];
          // console.log(random[index]);
          let a = random[index] - 0 + 1;
          // console.log(this.tableDataa[0]["a" + a]-0+1);
          this.tableDataa[0]["a" + a] = this.tableDataa[0]["a" + a] - 0 + 1;
          random.splice(index, 1);
        }
      }
      if (codeLength == 1) {
        if (this.code2.length !== 0) {
          if (this.code1.length == 0) {
            this.$message.warning("请先选择前区号码！");
            return;
          }
          this.$message.error("请先清空上次的双色球！");
          return;
        }
        let random = new Array(
          "1 ",
          "2 ",
          "3 ",
          "4 ",
          "5 ",
          "6 ",
          "7 ",
          "8 ",
          "9 ",
          "10 ",
          "11 ",
          "12 ",
          "13 ",
          "14 ",
          "15 ",
          "16 "
        );
        let index = Math.floor(Math.random() * random.length);
        this.code2 += random[index];
        // console.log(random[index]);
        let b = random[index] - 0 + 1;
        // console.log(this.tableDatab[0]["b" + b] - 0 + 1);
        this.tableDatab[0]["b" + b] = this.tableDatab[0]["b" + b] - 0 + 1;
      }
      if (codeLength == 5) {
        if (this.code3.length !== 0) {
          if (this.code4.length == 0) {
            this.$message.warning("请先选择后区号码！");
            return;
          }
          this.$message.error("请先清空上次的大乐透");
          return;
        }
        let random = new Array(
          "1 ",
          "2 ",
          "3 ",
          "4 ",
          "5 ",
          "6 ",
          "7 ",
          "8 ",
          "9 ",
          "10 ",
          "11 ",
          "12 ",
          "13 ",
          "14 ",
          "15 ",
          "16 ",
          "17 ",
          "18 ",
          "19 ",
          "20 ",
          "21 ",
          "22 ",
          "23 ",
          "24 ",
          "25 ",
          "26 ",
          "27 ",
          "28 ",
          "29 ",
          "30 ",
          "31 ",
          "32 ",
          "33 ",
          "34 ",
          "35 "
        );
        for (let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random() * random.length);
          this.code3 += random[index];
          let c = random[index] - 0 + 1;
          this.tableDatac[0]["c" + c] = this.tableDatac[0]["c" + c] - 0 + 1;
          random.splice(index, 1);
        }
      }
      if (codeLength == 2) {
        if (this.code4.length !== 0) {
          if (this.code3.length == 0) {
            this.$message.warning("请先选择前区号码！");
            return;
          }
          this.$message.error("请先清空上次的大乐透");
          return;
        }
        let random = new Array(
          "1 ",
          "2 ",
          "3 ",
          "4 ",
          "5 ",
          "6 ",
          "7 ",
          "8 ",
          "9 ",
          "10 ",
          "11 ",
          "12 "
        );
        for (let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random() * random.length);
          this.code4 += random[index];
          let d = random[index] - 0 + 1;
          this.tableDatad[0]["d" + d] = this.tableDatad[0]["d" + d] - 0 + 1;
          random.splice(index, 1);
        }
      }
    },
    clearCodes(num) {
      if (num == 1) {
        if (this.code1.length == 0) {
          this.$message.error("前区或后区号码为空！");
          return;
        }
        if (this.code2.length == 0) {
          this.$message.error("前区或后区号码为空！");
          return;
        }
        this.code1 = "";
        this.code2 = "";
        this.fuli++;
        if(this.fuli>=100) {
          document.getElementById('ssq').style.backgroundColor = "Aqua"
          document.getElementById('ssq').style.color = "Fuchsia"
        }
      }
      if (num == 2) {
        if (this.code3.length == 0) {
          this.$message.error("前区或后区号码为空！");
          return;
        }
        if (this.code4.length == 0) {
          this.$message.error("前区或后区号码为空！");
          return;
        }
        this.code3 = "";
        this.code4 = "";
        this.ticai++;
        if(this.ticai>=100) {
          document.getElementById('dlt').style.backgroundColor = "Aqua"
          document.getElementById('dlt').style.color = "Fuchsia"
        }
      }
    },

  }
};
</script>
<style lang="less" scoped>
.bigBox {
  // height: 100%;
  background-color: #ccc;
}
.el-form {
  float: left;
  width: 50%;
  padding: 10px 20px 0 0;
}
.upload-demo {
  float: right;
  width: 40%;
  margin-top: 200px;
}
.aaa {
  margin-right: 20px;
}
</style>