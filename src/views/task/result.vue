<template>
  <div class="app-container" style="width:100%;height:90%;">
    <!--返回按钮-->
    <!-- <div style="margin-bottom: 10px">
      <el-button type="primary" @click="back">返回</el-button>
    </div> -->
    <iframe id="iframeBox" :src="reportUrl" frameborder="1" width="100%" height="auto" onload="this.height=550" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: ''
    }
  },

  created() {
    if (this.$route.query && this.$route.query.taskId && this.$route.query.dataset) {
      console.log('taskId: ', this.$route.query.taskId)
      console.log('dataset: ', this.$route.query.dataset)
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // 调用回显
      this.reportUrl = this.$route.query.dataset + '_' + this.$route.query.taskId + '_result.html'
      loading.close()
    } else {
      this.reportUrl = 'homepage.html'
    }
  }
}
</script>
