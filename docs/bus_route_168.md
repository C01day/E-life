<el-row>
<el-col :span="6">
<el-card class="box-card" shadow="hover">
  <div slot="header" class="clearfix">
    <span style="color: red;">当前站：<br/>复旦大学新江湾城校区<br/>方向：<br/>复旦大学(邯郸路国顺路)<br/>->国江路淞行路</span>
  </div>
  <div>总车辆：5辆</div>
  <div>剩余车辆：3辆</div>
  <div>最近车辆：1站</div>
  <div>最近到达时间：约2分钟</div>
</el-card>
</el-col>
<el-col :span="6" style="text-align: right;">
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-68867"
        trigger="hover">
        <span style="color: red;">方向：复旦大学(邯郸路国顺路)->国江路淞行路</span><br/>
        <span>拥挤程度：正常</span><br/>
        <span>剩余站数：7站</span><br/>
        <span>到达时间：约12分钟</span>
        <el-tag slot="reference" effect="dark" size="small"><i class="el-icon-bottom"></i>正常</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-03567"
        trigger="hover">
        <span style="color: red;">方向：复旦大学(邯郸路国顺路)->国江路淞行路</span><br/>
        <span>拥挤程度：宽敞</span><br/>
        <span>剩余站数：5站</span><br/>
        <span>到达时间：约9分钟</span>
        <el-tag slot="reference" type="success" effect="dark" size="small"><i class="el-icon-bottom"></i>宽敞</el-tag>
    </el-popover>
<br/><br/><br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-54678"
        trigger="hover">
        <span style="color: red;">方向：复旦大学(邯郸路国顺路)->国江路淞行路</span><br/>
        <span>拥挤程度：拥挤</span><br/>
        <span>剩余站数：1站</span><br/>
        <span>到达时间：约2分钟</span>
        <el-tag slot="reference" type="warning" effect="dark" size="small" style="margin-top:10%;"><i class="el-icon-bottom"></i>拥挤</el-tag>
    </el-popover>
<br/><br/>
    <el-popover
        placement="top-start"
        title="沪D-13789"
        trigger="hover">
        <span style="color: red;">方向：复旦大学(邯郸路国顺路)->国江路淞行路</span><br/>
        <span>拥挤程度：宽敞</span><br/>
        <span>剩余站数：已经过</span><br/>
        <span>到达时间：无</span>
        <el-tag slot="reference" type="success" effect="dark" size="small"><i class="el-icon-bottom"></i>宽敞</el-tag>
    </el-popover>
    <el-popover
        placement="top-start"
        title="沪D-12340"
        trigger="hover">
        <span style="color: red;">方向：复旦大学(邯郸路国顺路)->国江路淞行路</span><br/>
        <span>拥挤程度：满载</span><br/>
        <span>剩余站数：已经过</span><br/>
        <span>到达时间：无</span>
        <el-tag slot="reference" type="danger" effect="dark" size="small"><i class="el-icon-bottom"></i>满载</el-tag>
    </el-popover>
</el-col>
<el-col :span="12">
    <el-steps :active="9" direction="vertical">
    <el-step title="复旦大学(邯郸路国顺路)"></el-step>
    <el-step title="五角场(邯郸路,轨道交通10号线五角场站)"></el-step>
    <el-step title="五角场(淞沪路,轨道交通10号线江湾体育场站)" icon="el-icon-location-outline"></el-step>
    <el-step title="淞沪路政立路"></el-step>
    <el-step title="淞沪路三门路(轨道交通10号线三门路站)" icon="el-icon-location-outline"></el-step>
    <el-step title="淞沪路民府路"></el-step>
    <el-step title="淞沪路殷高路(轨道交通10号线殷高东路站)"></el-step>
    <el-step title="淞沪路国晓路"></el-step>
    <el-step title="淞沪路殷行路(轨道交通10号线新江湾城站)" icon="el-icon-location-outline"></el-step>
    <el-step title="复旦大学新江湾城校区"></el-step>
    <el-step title="国浩路政和路" icon="el-icon-location-outline"></el-step>
    <el-step title="政和路国帆路"></el-step>
    <el-step title="国帆路淞沪路"></el-step>
    <el-step title="国江路淞行路"></el-step>
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
        margin-top: 5%;
        margin-right: 5%;
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