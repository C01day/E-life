<el-row>
  <el-card class="box-card1" shadow="hover">
  <div slot="header" class="clearfix">
  <span style="color: red;">当前站：<br/>复旦大学新江湾城校区</span>
  </div>
  <div>经过的公交：168 路，1201 路，1226 路</div>
  </el-card>
</el-row>
<el-row>
<div style="text-align: center;">
<el-select v-model="BusTypeNow" placeholder="公交车路线" @change="changeBusType">
    <el-option v-for="(item,index) in BusTypeOption" :value="item">
    {{item}}
    </el-option>
</el-select>
<el-select v-model="DirectionNow" placeholder="方向" @change="filtrateBus">
    <el-option v-for="(item,index) in DirectionOption" :value="item">
        {{item}}
    </el-option>
</el-select>
<el-button type="primary" icon="el-icon-search" @click="Search"></el-button>
</div>
</el-row>
<!-- <el-row> -->
<el-card class="box-card2" shadow="hover" v-for="(item,index) in AfterFilter" :key="index">
<div slot="header" class="clearfix">
<span :style="{color: item.Color}">{{item.Type}} 路</span>
</div>
<div>方向：{{item.Route}}</div>
<div>车辆数：{{item.CarNum}}辆</div>
<div>下一班时间：约{{item.NextTime}}分钟</div>
<div>预计价格：{{item.Price}}元</div>
<div>运行时间：{{item.TimeInterval}}</div>
</el-card>
<!-- </el-row> -->

<script>
    export default {
        data() {
            return {
                buses: [
                    {
                        Type:"168",
                        CarNum:5,
                        NextTime:2,
                        Price:3,
                        Route:"复旦大学(邯郸路国顺路)->国江路淞行路",
                        TimeInterval: "05:00—23:30",
                        Color:"red",
                    },
                    {
                        Type:"168",
                        CarNum:6,
                        NextTime:7,
                        Price:2,
                        Route:"国江路淞行路->复旦大学(邯郸路国顺路)",
                        TimeInterval: "05:00—23:30",
                        Color:"red",
                    },
                    {
                        Type:"1201",
                        CarNum:2,
                        NextTime:3,
                        Price:2,
                        Route:"淞沪路殷行路->殷行路江湾城路",
                        TimeInterval: "05:00—23:30",
                        Color:"blue",
                    },
                    {
                        Type:"1201",
                        CarNum:4,
                        NextTime:5,
                        Price:3,
                        Route:"殷行路江湾城路->淞沪路殷行路",
                        TimeInterval: "05:00—23:30",
                        Color:"blue",
                    },
                    {
                        Type:"1226",
                        CarNum:1,
                        NextTime:1,
                        Price:4,
                        Route:"淞沪路殷行路->淞沪路殷高路",
                        TimeInterval: "05:00—23:30",
                        Color:"green",
                    },
                    {
                        Type:"1226",
                        CarNum:3,
                        NextTime:6,
                        Price:2,
                        Route:"淞沪路殷高路->淞沪路殷行路",
                        TimeInterval: "05:00—23:30",
                        Color:"green",
                    },
                ],
                AfterFilter:[],
                BusTypeNow:'',
                DirectionNow:'',
                BusTypeOption:['168','1201','1226'],
                DirectionOption:[],
            }
        },
        mounted() {
            this.AfterFilter = this.buses;
            // console.log(this.AfterFilter);
        },
        methods: {
            changeBusType() {
                this.DirectionNow='';
                this.DirectionOption = [];
                for (var i = 0; i < this.buses.length; i++) {
                    // console.log(this.buses[i].Type);
                    // console.log(this.BusTypeNow);
                    if (this.buses[i].Type == this.BusTypeNow ) {
                        this.DirectionOption.push(this.buses[i].Route);
                    }
                }
                this.filtrateBus();
            },
            filtrateBus() {
                this.AfterFilter = [];
                for (var i = 0; i < this.buses.length; i++) {
                    if(this.buses[i].Type == this.BusTypeNow){
                        this.DirectionNow == '' ? this.AfterFilter.push(this.buses[i]) : this.buses[i].Route == this.DirectionNow ? this.AfterFilter.push(this.buses[i]):'';
                    }
                }
            },
            Search() {
                if(this.BusTypeNow=="168") this.$router.push({ path: `/bus_route_168.html` });
                else if(this.BusTypeNow=="1201") this.$router.push({ path: `/bus_route_1201.html` });
                else if(this.BusTypeNow=="1226") this.$router.push({ path: `/bus_route_1226.html` });
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin:0 auto;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .box-card2 {
        width: 45%;
        margin-top: 20px;
        display: inline-block;
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
        margin-right: 20px;
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .box-card1 /deep/.el-card__header {
        background: #ffb6c1;
    }
    .box-card2 /deep/ .el-card__header {
        font-size: 24px;
        background: rgba(161, 249, 249, 1);
    }
    /deep/ .el-card__body {
        background: rgba(245, 249, 161, 1);
    }
    .el-select {
        margin-top: 20px;
        width: 20%;
    }
    /* .el-select + .el-select {
        margin-left: 10px;
    } */
</style>