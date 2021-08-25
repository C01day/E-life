<el-tag type="success">您正在帮 XXX 代付</el-tag>
<template>
<el-card class="box-card" shadow="hover">
  <div slot="header" class="clearfix">
    <span>支付中心</span>
  </div>
  <div>金额：20 CNY</div>
  <div>日期：2021-XX-XX</div>
  <div>出发地：一大会址</div>
  <div>目的地：上海人民广场</div>
</el-card>
<el-tag type="danger">请选择您的支付方式：</el-tag>
<br/>
<el-row>
  <el-col :span="24">
    <div align=center >
    <div>
        <img :src="$withBase('/微信支付.jpg')" />
    </div>
    <div>
        <el-radio v-model="radio" label="1">微信支付</el-radio>
    </div>
    <div>
        <img :src="$withBase('/支付宝支付.jpg')" />
    </div>
    <div>
        <el-radio v-model="radio" label="2">支付宝支付</el-radio>
    </div>
    </div>
  </el-col>
</el-row>
<div align=center>
    <el-button type="danger" icon="el-icon-bank-card" @click="nextRoute">支付</el-button>
</div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        options: [
        {
          value: '1',
          label: '亲友一'
        }, 
        {
          value: '2',
          label: '亲友二'
        }, 
        {
          value: '3',
          label: '亲友三'
        },
        ],
        value: '',
      };
    },
    methods: {
        nextRoute() {
            this.$router.push({ path: `/pay_success.html` });
        },
    }
  }
</script>

<style scoped>
    img {
        margin-top: 20px;
    }
    .el-radio {
        margin-top: 2px;
    }
    .el-button {
        margin-top: 30px;
        height: 50px;
        width: 40%;
        font-size: 25px;
        padding: 2px;
    }
    .el-tag {
        margin-top: 20px;
        font-size: 16px;
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
    }
     
    .el-divider--vertical {
        height: 300px;
        width: 1px;
        margin-left: 20px;
    }
    .el-select {
        margin-top: 20px;
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