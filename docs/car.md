<el-tag type="success">您当前所在的位置为：一大会址</el-tag>
<br/>
<el-tag type="success">您的目的地为：上海人民广场</el-tag>
<br/>
<el-card class="box-card" shadow="hover">
  <div slot="header" class="clearfix">
    <span>路线详情：</span>
  </div>
  <div>时间：约10分钟</div>
  <div>距离：约1.8公里</div>
  <div>预计金额：20 CNY</div>
  <div>出发日期：2021-XX-XX</div>
  <div>红绿灯个数：6个</div>
  <div>道路状况：较拥堵</div>
</el-card>
<el-tag type="warning">打车的路线为：</el-tag>
<div align=center>
<img :src="$withBase('/打车导航.png')" style="zoom:80%;" />
<el-button type="danger" icon="el-icon-back" @click="returnPath">返回</el-button>
<el-button type="primary" icon="el-icon-s-promotion" @click="nextRoute">一键打车</el-button>
</div>



<script>
    export default {
        methods: {
            returnPath() {
                this.$router.push({ path: `/select.html` });
            },
            nextRoute() {
                this.$router.push({ path: `/waitting.html` });
            },
        }
    }
</script>

<style scoped>
    .el-tag {
        margin-top: 20px;
        margin-left: 10px;
        font-size: 16px;
    }
    .el-button {
        margin-top: 20px;
        height: 50px;
        width: 40%;
        font-size: 25px;
        /* text-align: center; */
        padding: 2px;
    }
    .box-card {
        width: 100%;
        margin-top: 20px;
    }
    img {
        margin-top: 20px;
    }
    .el-card {
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    /deep/.el-card__header {
        background: rgba(161, 249, 249, 1);
    }
    /deep/.el-card__body {
        background: rgba(245, 249, 161, 1);
    }
</style>