<el-result icon="success" title="正在出行" subTitle="您的行程正在记录中，请注意安全">
  <template slot="extra">
    <el-button type="primary" size="medium" icon="el-icon-finished" @click="nextRoute">返回</el-button>
  </template>
</el-result>

<script>
    export default {
        methods: {
            nextRoute() {
                this.$router.push({ path: `/walk.html` });
            },
        }
    }
</script>