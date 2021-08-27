<el-tag type="success">您当前所在的位置为：一大会址</el-tag>
<el-button class="top-button" icon="el-icon-magic-stick" type="primary" @click="goBus" size="mini">公交车出行</el-button>
<el-button class="top-button" icon="el-icon-magic-stick" type="primary" @click="goSubway" size="mini">地铁流量</el-button>
<div align=center>
    <el-switch
    style="display: block"
    v-model="manual"
    active-color="#13ce66"
    inactive-color="#13ce66"
    active-text="手动输入"
    inactive-text="方言识别">
    </el-switch>
    <div v-if="manual">
        <el-input
            placeholder="请输入目的地"
            suffix-icon="el-icon-search"
            v-model="input">
        </el-input>
        <el-button type="primary" style="width:98px" icon="el-icon-search" @click="nextRoute">搜索</el-button>
    </div>
    <div v-else>
        <el-select v-model="province" placeholder="方言省份" @change="changeProvince">
            <el-option v-for="item in this.allCity" :value="item.name">
            {{item.name}}
            </el-option>
        </el-select>
        <el-select v-model="city" placeholder="市区">
            <el-option v-for="item in this.cityArr" :value="item.name">
                {{item.name}}
            </el-option>
        </el-select>
        <el-popover
            placement="top"
            width="160"
            v-model="visible">
            <div style="text-align:center">
            <i class="el-icon-mic" v-if="loading == 1">请点击按钮开始录音</i>
            <i class="el-icon-loading" v-else-if="loading == 2"></i>
            <i v-else="loading == 3">识别的地址为：上海人民广场</i>
            </div>
            <div style="text-align: right; margin: 0">
                <el-button type="primary" size="mini" @click="loading = 2">录音</el-button>
                <el-button type="danger" size="mini" @click="loading = 3">结束</el-button>
            </div>
            <el-button type="primary" style="width:98px" icon="el-icon-mic" slot="reference" @click="loading = 1">识别</el-button>
        </el-popover>
        <el-button class="searchButton" type="primary" style="width:98px" icon="el-icon-search" @click="nextRoute">搜索</el-button>
    </div>
</div>

<script>
  import {cityData} from './.vuepress/items.js'
  export default {
    data() {
      return {
        manual: true,
        input: '',
        province: '',
        city: '',
        cityArr: [],
        allCity: cityData,
        loading: 0,
        visible: false,
      }
    },
    mounted() {
        // console.log(this.allCity);
        
    },
    watch: {

    },
    methods: {
        changeProvince() {
            this.city = '';
            for (var i = 0; i < this.allCity.length; i++) {
            var obj = this.allCity[i]
            if (this.province == obj.name ) {
              this.cityArr= obj.sub;
            }
          }
        },
        nextRoute() {
            this.$router.push({ path: `/select.html` });
        },
        goBus() {
            this.$router.push({ path: `/bus_search.html` });
        },
        goSubway() {
            this.$router.push({ path: `/subway.html` });
        }
    }
  };
</script>

<style scoped>
    .el-button {
        margin-top: 10px;
        vertical-align:middle;
        text-align: center;
    }
    .top-button {
        margin-top: 0px;
        margin-left: 0px;
    }
    .searchButton {
        margin-left: 10px;
    }
    /* .el-button + .el-button{
        margin-left: 20px;
    } */
    .el-input {
        margin-top: 20px;
    }
    .el-switch {
        margin-top: 25%;
    }
    .el-select {
        margin-top: 20px;
        width: 40%;
    }
    .el-select + .el-select {
        margin-left: 10px;
    }
</style>