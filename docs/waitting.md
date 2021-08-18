
<el-result icon="success" title="打车成功" subTitle="请等待司机接送，并在结束后支付">
  <template slot="extra">
    <el-button type="primary" size="medium" icon="el-icon-finished" @click="nextRoute">打车结束</el-button>
  </template>
</el-result>

<script>
    export default {
        methods: {
            nextRoute() {
                this.$router.push({ path: `/pay.html` });
            },
        }
    }
</script>