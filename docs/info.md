<el-card class="box-card" shadow="always">
  <div slot="header" class="clearfix" style="font-size: 30px;">
    <span>晚七点人民广场</span>
  </div>
  <el-row>
  <el-col :span="8" style="margin-left: 6%;">
  <div><i class="el-icon-location-outline"></i>  上海-徐汇区</div>
  <div><i class="el-icon-position"></i>  距离：100米</div>
  <div><i class="el-icon-time"></i>  时间：2021-08-22</div>
  <div><i class="el-icon-paperclip"></i>  活动类型：广场舞</div>
  </el-col>
  <el-col :span="2">
  <el-divider direction="vertical"></el-divider>
  </el-col>
  <el-col :span="8" style="margin-left: 10%;">
  <div><i class="el-icon-view"></i>  浏览量：230</div>
  <div><i class="el-icon-star-off"></i>  收藏：32</div>
  <div><i class="el-icon-chat-round"></i>  评论数：20</div>
  <div><i class="el-icon-user"></i>  参加人数：12</div>
  </el-col>
  </el-row>
</el-card>

## 详细信息
::: tip
今晚七点在人民广场跳广场舞，由XXX组织，提供热心指导，欢迎大家的参与
:::

<Comment/>


<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 100%;
    margin-top: 20px;
  }
  /* .el-button + .el-button {
      margin-left: 10px;
  } */
  .el-divider--vertical {
        height: 100px;
        width: 1px;
        margin-left: 100%;
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