<el-tag type="success">行程正在进行中……</el-tag>
<el-card class="box-card" shadow="hover">
  <div>出行方式：步行</div>
  <div>出发地：一大会址</div>
  <div>目的地：上海人民广场</div>
  <div>道路状况：通畅</div>
  <div>偏移路线：0米</div>
  <div>已完成：80%</div>
  <div>预计花费：20 CNY</div>
</el-card>
<div align=center>
<img :src="$withBase('/出行轨迹.jpg')" />

</div>

<style scoped>
  .el-tag {
    font-size: 16px;
  }
  img {
    margin-top: 20px;    
  }
  .text {
    font-size: 10px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    margin-top: 20px;
    text-align: left;
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