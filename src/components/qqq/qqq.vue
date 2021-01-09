<template>
  <div class="bigBox">
    <el-table
      :data="tableData"
      style="width: 100%;"
      :cell-style="cellStyle"
      :header-cell-style="{background:'#ccc',color:'#606266'}"
    >
      <el-table-column label="日期" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="瞎瞎" align="center">
        <template slot-scope="scope">
          <p style="margin-left: 10px">{{ scope.row.asd }}</p>
        </template>
      </el-table-column>
      <el-table-column label="哈哈" align="center">
        <template slot-scope="scope">
          <p style="margin-left: 10px">{{ scope.row.dsa }}</p>
        </template>
      </el-table-column>
      <el-table-column label="羞羞" align="center">
        <template slot-scope="scope">
          <p style="margin-left: 10px">{{ scope.row.sad }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p
      style="padding: 50px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;background-color: #ccc"
    >
      &copy;agdts任天野阿萨德金坷垃科鲁兹trhydkdfhaertfgfgjuh,nbvvyuykgfhsdfrargfdgadgadgxbtjuytyiuyojhjkhjloptyeeqwsfsfdgfdhdjgcmbmgxzdfxffxggxjjhkuyoiupolfyuujgfhjyfjtyjftyjhgjfhjhyfhjyfhj
      asFaffdgehgfxvnnytdgherhjuojkmnnjxgbvnxfdhf
    </p>
    <div>
      <ol style=" height:300px;  overflow:scroll">
        <li v-for="(item,index) in list" :key="index">
          <span>{{item.name}}</span>
          <button @click="xiagao(index)">删除</button>
        </li>
      </ol>
    </div>
    <el-button type="primary" @click="showDialogForm">添加字段</el-button>
    <el-dialog title="添加字段" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="字段名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelDialogForm">取 消</el-button>
        <el-button type="primary" @click="confirmDialogForm()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
    <el-drawer
      title="滕王阁序"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :modal="false"
    >
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">    
  披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？
  </pre>
      <pre style="white-space: pre-wrap;word-wrap: break-word;text-indent:2em">
  呜乎！胜地不常，盛筵难再；兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔：
      滕王高阁临江渚，佩玉鸣鸾罢歌舞。
      画栋朝飞南浦云，珠帘暮卷西山雨。
      闲云潭影日悠悠，物换星移几度秋。
      阁中帝子今何在？槛外长江空自流。（此段教材无）
      </pre>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          asd: "亲爱的，你慢慢飞",
          dsa: "小心前面带刺的玫瑰",
          sad: "羞答答的玫瑰静悄悄的开"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          asd: "亲爱的，你慢慢飞",
          dsa: "小心前面带刺的玫瑰",
          sad: "羞答答的玫瑰静悄悄的开"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          asd: "亲爱的，你慢慢飞",
          dsa: "小心前面带刺的玫瑰",
          sad: "羞答答的玫瑰静悄悄的开"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          asd: "亲爱的，你慢慢飞",
          dsa: "小心前面带刺的玫瑰",
          sad: "羞答答的玫瑰静悄悄的开"
        }
      ],
      list: [
        {
          name: "阿萨德打卡看得开了的设计费加密的开放日 亏死了看看嘛春风满面 "
        },
        { name: "阿萨德打卡看sadv密的阿热女权adventure爱上淘宝官方春风满面 " },
        { name: "阿萨德打卡看得开了的当舅舅通过对人体符合你 右贵妃 靠让他加 " },
        { name: "入库员换个卡套房源看俯看看， 㐇日 亏死了看看嘛春风满面 " },
        { name: "阿萨付货款愉快城管局体育局苦苦法规及肯德基日体育局看风满面 " },
        { name: "阿萨德打卡㧄体育课对景挂画喐口服液口蹄疫 " }
      ],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: ""
      },
      abc: {
        name:
          "******************************************************************"
      },
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {},
    cellStyle(row, column, rowIndex, columnIndex) {
      return "backgroundColor: #eef1f6";
    },
    async xiagao(index) {
      const confirmResult = await this.$confirm(
        "此操作将删除该条数据，是否继续？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => err);
      console.log(confirmResult);
      if (confirmResult == "confirm") {
        this.list.splice(index, 1);
        this.$message.success("删除成功");
      } else {
        this.$message.info("取消删除");
      }
    },
    showDialogForm() {
      this.dialogFormVisible = true;
    },
    cancelDialogForm() {
      this.dialogFormVisible = false;
      this.form.name = "";
      this.$message.info("取消添加");
    },
    confirmDialogForm() {
      this.dialogFormVisible = false;
      this.list.unshift(this.abc);
      // this.$refs.formName.resetFields()
      this.$message.success("添加成功");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
.bigBox {
  height: 100%;
  background-color: #eef1f6;
}
</style>