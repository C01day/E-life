<el-tag type="success">您当前所在的位置为：一大会址</el-tag>
<br/>
<el-tag type="success">您的目的地为：上海人民广场</el-tag>
<br/>
<el-card class="box-card" shadow="always">
  <div slot="header" class="clearfix">
    <span>路线详情：</span>
  </div>
  <div>时间：约25分钟</div>
  <div>距离：约1.8公里</div>
  <div>路口数：7个</div>
  <div>人流量：通畅</div>
</el-card>
<el-tag type="warning">步行的路线为：</el-tag>
<div align=center>
<img :src="$withBase('/步行导航.png')" style="zoom:80%;" />
<el-button type="danger" icon="el-icon-back" @click="returnPath">返回</el-button>
<el-button type="primary" icon="el-icon-s-promotion" @click="nextRoute">开始出行</el-button>
</div>

<script>
    export default {
        methods: {
            returnPath() {
                this.$router.push({ path: `/select.html` });
            },
            nextRoute() {
                this.$router.push({ path: `/walk_success.html` });
            }
        }
    }
</script>

<style scoped>
    .el-tag {
        margin-top: 20px;
        margin-left: 10px;
        /* margin-bottom: 10px; */
        font-size: 16px;
    }
    .el-button {
        margin-top: 20px;
        height: 50px;
        width: 40%;
        font-size: 25px;
        padding: 2px;
    }
    .box-card {
        margin-top: 20px;
        width: 100%;
    }
    img {
        margin-top: 20px;
    }
    .el-card {
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .el-card__header {
        background: rgba(161, 249, 249, 1);
    }
    .el-card__body {
        background: rgba(245, 249, 161, 1);
    }
</style>