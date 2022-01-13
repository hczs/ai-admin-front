<template>
  <div class="app-container" style="width:100%;height:100%;">
    <!--返回按钮-->
    <!-- <div style="margin-bottom: 10px">
      <el-button type="primary" @click="back">返回</el-button>
    </div> -->
    <iframe id="iframeBox" :src="reportUrl" frameborder="1" width="100%" height="auto" onload="this.height=700" />
  </div>
</template>
<script>
export default {

  data() {
    return {
      reportUrl: '',
      BASE_API: window.global_url.Base_url
    }
  },
  created() {
    if (this.$route.params && this.$route.params.file_name) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // 从路径获取文件
      const reportUrl = this.$route.params.file_name
      console.log(reportUrl)
      console.log(this.$route.params)
      // 调用回显
      this.reportUrl = reportUrl + '.html'
      loading.close()
    } else {
      this.reportUrl = 'homepage.html'
    }
  },
  methods: {
    back() {
      this.$router.go(-1)// 返回上一层
    }
  }
}

</script>
