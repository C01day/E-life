<div style="margin-top: 10%;">
<el-button icon="el-icon-sort" type="text" size="medium" @click="goBack">应用</el-button>
</div>
<div class="block" v-for="(i,index) in lists" :key="index">
    <el-tag effect="plain">车厢{{i + 1}}</el-tag>
    <img :src="$withBase('/车厢.jpg')">
    <el-progress type="dashboard" :stroke-width="12" :width="120" :percentage="percentages[i]" :color="customColorMethod"></el-progress>
    <el-input style="width: 60%;"
        placeholder="请输入"
        v-model="percentages[i]"
        clearable>
    </el-input>
    <div>
    <el-button-group>
        <el-button icon="el-icon-minus" type="danger" @click="decrease(i)"></el-button>
        <el-button icon="el-icon-plus" type="primary" @click="increase(i)"></el-button>
    </el-button-group>
    </div>
    <el-divider></el-divider>
    <el-tag class="waitTag" effect="plain">等待队列{{i + 1}}</el-tag>
    <img :src="$withBase('/等待.jpg')">
    <el-progress type="dashboard" :stroke-width="12" :width="120" :percentage="percentages[i+4]" :color="customColorMethod"></el-progress>
    <el-input style="width: 60%;"
        placeholder="请输入"
        v-model="percentages[i+4]"
        clearable>
    </el-input>
    <div>
    <el-button-group>
        <el-button icon="el-icon-minus" type="danger" @click="decrease(i+4)"></el-button>
        <el-button icon="el-icon-plus" type="primary" @click="increase(i+4)"></el-button>
    </el-button-group>
    </div>
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
        this.percentages = JSON.parse(this.$route.query.Data);
        console.log(JSON.parse(this.$route.query.Data));
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
        goBack() {  
            // sessionStorage.setItem('Data',JSON.stringify(this.percentages));
            // Data = JSON.parse(sessionStorage.getItem('Data'));
            // console.log(Data);
            this.$router.push({ path: `/subway.html`,query:{Data:JSON.stringify(this.percentages)} });
        },
        increase(i) {
            this.percentages[i] += 10;
            if (this.percentages[i] > 100) {
                this.percentages[i] = 100;
            }
            Vue.set(this.percentages, i, this.percentages[i]);
            // console.log(this.percentages)
        },
        decrease(i) {
            this.percentages[i] -= 10;
            if (this.percentages[i] < 0) {
                this.percentages[i] = 0;
            }
            Vue.set(this.percentages, i, this.percentages[i])
            // console.log(this.percentages)
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