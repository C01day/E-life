<template>
<span>
    <el-badge :value="dynamicTags.length" class="item">
  <el-button type="danger" class="count" plain>评论数</el-button>
    </el-badge>
    <el-tag
    :key="tag"
    v-for="tag in dynamicTags"
    type=""
    effect="plain">
    {{tag}}
</el-tag>
<el-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    size="small"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"
  >
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">添加新评论</el-button>
</span>
</template>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['XXX：马上来', 'XXX：有几个人？', 'XX：可以可以'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push("XXX：" + inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
    .el-tag {
        height: 48px;
        width: 100%;
        margin-top: 20px;
        font-size: 24px;
    }
    .button-new-tag {
        height: 48px;
        margin-top: 20px;
        font-size: 24px;
        width: 40%;
        /* padding-top: 0;
        padding-bottom: 0; */
    }
    .input-new-tag {
        height: 48px;
        margin-top: 20px;
        font-size: 24px;
        width: 40%;
        /* vertical-align: bottom; */
    }
    .el-input {
        height: 48px;
        margin-top: 20px;
        font-size: 24px;
        width: 40%;
    }
    .el-button {
        height: 48px;
        margin-top: 20px;
        font-size: 24px;
        width: 40%;
    }
    .el-badge {
        margin-top: 20px;
    }
    .count {
        margin-top: 0px;
        width: 100px;
        padding: 10px;
        text-align: center;
    }
</style>