<el-row>
<el-col :span="6">
<el-card class="box-card" shadow="hover">
  <div slot="header" class="clearfix">
    <span style="color: red;">当前站：<br/>复旦大学新江湾城校区<br/>方向：<br/>淞沪路殷行路<br/>->淞沪路殷行路</span>
  </div>
  <div>总车辆：8辆</div>
  <div>剩余车辆：8辆</div>
  <div>最近车辆：1站</div>
  <div>最近到达时间：约4分钟</div>
</el-card>
</el-col>
<el-col :span="6" style="text-align: right;">
<br/>
    <el-popover
        placement="top-start"
        title="沪D-43737"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：正常</span><br/>
        <span>剩余站数：14站</span><br/>
        <span>到达时间：约36分钟</span>
        <el-tag slot="reference" effect="dark" size="small"><i class="el-icon-bottom"></i>正常</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-13488"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：满载</span><br/>
        <span>剩余站数：12站</span><br/>
        <span>到达时间：约32分钟</span>
        <el-tag slot="reference" type="danger" effect="dark" size="small" style="margin-top: 5%;"><i class="el-icon-bottom"></i>满载</el-tag>
    </el-popover>
<br/><br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-13647"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：宽敞</span><br/>
        <span>剩余站数：9站</span><br/>
        <span>到达时间：约24分钟</span>
        <el-tag slot="reference" type="success" effect="dark" size="small" style="margin-top: 7%;"><i class="el-icon-bottom"></i>宽敞</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-07687"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：拥挤</span><br/>
        <span>剩余站数：7站</span><br/>
        <span>到达时间：约18分钟</span>
        <el-tag slot="reference" type="warning" effect="dark" size="small"><i class="el-icon-bottom"></i>拥挤</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-43047"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：拥挤</span><br/>
        <span>剩余站数：5站</span><br/>
        <span>到达时间：约14分钟</span>
        <el-tag slot="reference" type="warning" effect="dark" size="small"><i class="el-icon-bottom"></i>拥挤</el-tag>
    </el-popover>
    <el-popover
        placement="top-start"
        title="沪D-08767"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：正常</span><br/>
        <span>剩余站数：5站</span><br/>
        <span>到达时间：约14分钟</span>
        <el-tag slot="reference" effect="dark" size="small"><i class="el-icon-bottom"></i>正常</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-89707"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：宽敞</span><br/>
        <span>剩余站数：3站</span><br/>
        <span>到达时间：约8分钟</span>
        <el-tag slot="reference" type="success" effect="dark" size="small" style="margin-top: 6%;"><i class="el-icon-bottom"></i>宽敞</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-96077"
        trigger="hover">
        <span style="color: red;">方向：淞沪路殷行路->淞沪路殷行路</span><br/>
        <span>拥挤程度：满载</span><br/>
        <span>剩余站数：1站</span><br/>
        <span>到达时间：约4分钟</span>
        <el-tag slot="reference" type="danger" effect="dark" size="small"><i class="el-icon-bottom"></i>满载</el-tag>
    </el-popover>
</el-col>
<el-col :span="12">
    <el-steps :active="15" direction="vertical">
    <el-step title="淞沪路殷行路(轨道交通10号线新江湾城站)"></el-step>
    <el-step title="淞沪路殷高路(轨道交通10号线殷高东路站)" icon="el-icon-location-outline"></el-step>
    <el-step title="殷高东路政芳路"></el-step>
    <el-step title="国权北路青石路" icon="el-icon-location-outline"></el-step>
    <el-step title="三门路吉浦路"></el-step>
    <el-step title="逸仙路安汾路"></el-step>
    <el-step title="高境庙(逸仙路殷高路)" icon="el-icon-location-outline"></el-step>
    <el-step title="殷高路吉浦路"></el-step>
    <el-step title="殷高路国权北路" icon="el-icon-location-outline"></el-step>
    <el-step title="殷高东路政芳路" ></el-step>
    <el-step title="殷高东路淞沪路" icon="el-icon-location-outline"></el-step>
    <el-step title="淞沪路国晓路"></el-step>
    <el-step title="殷行路政和路" icon="el-icon-location-outline"></el-step>
    <el-step title="政和路国秀路"></el-step>
    <el-step title="国浩路政和路" icon="el-icon-location-outline"></el-step>
    <el-step title="复旦大学新江湾城校区"></el-step>
    <el-step title="淞沪路殷行路(轨道交通10号线新江湾城站)"></el-step>
    </el-steps>
</el-col>
</el-row>
<div style="text-align: center;">
<el-button type="primary" icon="el-icon-refresh-left" @click="Return">返回</el-button>
</div>

<script>
    export default {
        mounted() {
            this.str = this.Content.map((str)=>{
                    return str.replace("\r\n", "<br>");;
                });
    },
        data() {
            return {
                str: [],
                Content: [
                    "人数：正常 \n 剩余站数：5站"
                ],
            }
        },
        methods: {
            Return() {
                this.$router.push({ path: `/bus_search.html` });
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin: 0 auto;
    }
    .el-tag {
        margin-top: 4%;
        margin-right: 2%;
    }
     .el-card {
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    /deep/.el-card__header {
        background: #ffb6c1;
    }
    /deep/.el-card__body {
        background: rgba(245, 249, 161, 1);
    }
    .el-button {
        margin: 0 auto;
        margin-top: 20px;
    }
</style>