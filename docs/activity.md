<el-button icon="el-icon-sort" type="text" style="margin-left: 10%;" @click="sortByTime">按时间排序</el-button>
<el-button icon="el-icon-sort" type="text" style="margin-left: 10%;" @click="sortByDistance">按距离排序</el-button>
<el-button icon="el-icon-sort" type="text" style="margin-left: 10%;" @click="sortByNum">按人数排序</el-button>

<el-card class="box-card" shadow="always" v-for="item in activitys" :key="item.Title">
  <div slot="header" class="clearfix" style="font-size: 30px;">
    <span>{{item.Title}}</span>
    <el-tooltip class="item" effect="dark" content="查看详情" placement="top">
    <el-button icon="el-icon-search" style="position: absolute; left: 380px;" circle  @click="info(item)"></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="参加活动" placement="top">
    <el-button type="success" icon="el-icon-check" style="position: absolute; left: 420px;" circle @click="join"></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="收藏活动" placement="top">
    <el-button type="warning" icon="el-icon-star-off" style="position: absolute; left: 470px;" circle @click="collect"></el-button>
    </el-tooltip>
  </div>
  <el-row>
  <el-col :span="8" style="margin-left: 6%;">
  <div><i class="el-icon-location-outline"></i>  {{item.Location}}</div>
  <div><i class="el-icon-position"></i>  距离：{{item.Distance}}米</div>
  <div><i class="el-icon-time"></i>  {{item.Time}}</div>
  <div><i class="el-icon-paperclip"></i>  {{item.Type}}</div>
  </el-col>
  <el-col :span="2">
  <el-divider direction="vertical"></el-divider>
  </el-col>
  <el-col :span="8" style="margin-left: 10%;">
  <div><i class="el-icon-view"></i>  {{item.View}}</div>
  <div><i class="el-icon-star-off"></i>  {{item.Star}}</div>
  <div><i class="el-icon-chat-round"></i>  {{item.Comment}}</div>
  <div><i class="el-icon-user"></i>  参加人数：{{item.Join}}</div>
  </el-col>
  </el-row>
</el-card>

<script>
    export default {
        data() {
            return {
                activitys: [
                    {
                        Title:"去XX旅游",
                        Location:"上海-徐汇区",
                        Distance:260,
                        Time:"2021-08-21",
                        Type:"活动类型：旅游",
                        View:"浏览量：113",
                        Star:"收藏：20",
                        Comment:"评论数：8",
                        Join:5,
                    },
                    {
                        Title:"找人下象棋",
                        Location:"上海-徐汇区",
                        Distance:240,
                        Time:"2021-08-23",
                        Type:"活动类型：下棋",
                        View:"浏览量：60",
                        Star:"收藏：12",
                        Comment:"评论数：6",
                        Join:4,
                    },
                    {
                        Title:"晚七点人民广场",
                        Location:"上海-徐汇区",
                        Distance:100,
                        Time:"2021-08-22",
                        Type:"活动类型：广场舞",
                        View:"浏览量：230",
                        Star:"收藏：32",
                        Comment:"评论数：20",
                        Join:12,
                    },
                    {
                        Title:"公园徒步",
                        Location:"上海-徐汇区",
                        Distance:80,
                        Time:"2021-08-20",
                        Type:"活动类型：运动",
                        View:"浏览量：127",
                        Star:"收藏：21",
                        Comment:"评论数：11",
                        Join:7,
                    },
                    {
                        Title:"打麻将",
                        Location:"上海-徐汇区",
                        Distance:360,
                        Time:"2021-08-24",
                        Type:"活动类型：麻将",
                        View:"浏览量：241",
                        Star:"收藏：23",
                        Comment:"评论数：22",
                        Join:8,
                    },
                ],
            }
        },
        // computed: {
        //     activitys:function(){
        //       return this.activitys.sort(this.compare("Time"));
        //   },
        // },
        methods: {
            compare(attr){ //这是比较函数
                return function(x,y){
                    var a = x[attr];
                    var b = y[attr];
                    if (a < b)
                        return -1;
                    if (a > b)
                        return 1;
                    return 0;
                    //升序
                }
            },
            sortByTime() {
                this.activitys.sort(this.compare("Time"));
                // console.log(this.activitys);
            },
            sortByDistance() {
                this.activitys.sort(function(a,b) {return a.Distance - b.Distance;});
                // console.log(this.activitys);
            },
            sortByNum() {
                this.activitys.sort(function(a,b) {return a.Join - b.Join;});
            },
            join() {
                this.$message({
                    showClose: true,
                    message: '参加成功',
                    type: 'success'
                });
            },
            collect() {
                this.$message({
                    showClose: true,
                    message: '收藏成功',
                    type: 'success'
                });
            },
            info(item) {
                if(item.Title=="晚七点人民广场") this.$router.push({ path: `/info.html` });
            }
        }
    }
</script>

<style scoped>
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
    /deep/.el-card__header {
        background: rgba(161, 249, 249, 1);
    }
    /deep/.el-card__body {
        background: rgba(245, 249, 161, 1);
    }
</style>