<div style="margin-top: 10%;">
<el-button icon="el-icon-setting" type="text" size="medium" @click="goToControl">转到控制台</el-button>
</div>
<div class="block" v-for="(i,index) in lists" :key="index">
<el-tag effect="plain">车厢{{i + 1}}</el-tag>
<img :src="$withBase('/车厢.jpg')">
<el-progress :text-inside="true" :stroke-width="24" :percentage="percentages[i]" :color="customColorMethod(percentages[i])"></el-progress>
<el-divider></el-divider>
<el-tag class="waitTag" effect="plain">等待队列{{i + 1}}</el-tag>
<img :src="$withBase('/等待.jpg')">
<el-progress :text-inside="true" :stroke-width="24" :percentage="percentages[i+4]" :color="customColorMethod(percentages[i+4])"></el-progress>
</div>

<script>
import Vue from 'vue';
  export default {
    data() {
      return {
        lists: [...Array(4).keys()],
        percentages: [10,50,60,80,70,30,40,100],
      }
    },
    mounted(){
        // Data = JSON.parse(sessionStorage.getItem('Data'));
        // console.log(Data);
        console.log(this.$route.query.Data); //string
        if(this.$route.query.Data != null){
            this.percentages = JSON.parse(this.$route.query.Data); //string->array/object
        }
    },
    methods: {
        customColorMethod(percentage) {
            if (percentage <= 25) {
                return '#67C23A';
            }
            else if (percentage <= 50) {
                return '#409EFF';
            }
            else if (percentage <= 75) {
                return '#E6A23C';
            }
            else if (percentage <= 100) {
                return '#F56C6C';
            }
        },
        goToControl() {
            this.$router.push({ path: `/subway_control.html`,query:{Data:JSON.stringify(this.percentages)} });
        }
    }
  }
</script>

<style scoped>
    .block {
        /* margin-top: 30%; */
        margin-right: 1%;
        width: 24%;
        text-align: center;
        display: inline-block;
    }
    .el-tag {
        margin-top: 10px;
    }
    /* .waitTag {
        margin-top: 30px;
    } */
    .el-divider {
        margin-top: 30px;
    }
    .el-progress {
        margin-top: 10px;
    }
    .el-button {
        margin-top: 10px;
    }
    img {
        margin-top: 10px;
    }
</style>