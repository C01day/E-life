<el-tag type="success">您当前所在的位置为：一大会址</el-tag>
<br/>
<el-tag type="success">您的目的地为：上海人民广场</el-tag>
<br/>
<el-tag type="warning">请选择您的出行方式：</el-tag>
<div align=center>
<el-button type="success" icon="el-icon-position" @click="nextRouteWalk">步行</el-button>
<el-button type="primary" icon="el-icon-location-information" @click="nextRouteCar">打车</el-button>
</div>

<script>
    export default {
        methods: {
            nextRouteWalk() {
                this.$router.push({ path: `/walk.html` });
            },
            nextRouteCar() {
                this.$router.push({ path: `/car.html` });
            }
        }
    }
</script>

<style scoped>
    .el-tag {
        margin-top: 10px;
        margin-left: 10px;
        font-size: 16px;
    }
    .el-button {
        margin-top: 20px;
        height: 50px;
        width: 40%;
        font-size: 25px;
        padding: 2px;
    }
</style>