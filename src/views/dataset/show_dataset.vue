<template>
  <div class="app-container" style="width:100%;height:100%;">
    <iframe id="iframeBox" :src="reportUrl" frameborder="1" width="100%" height="auto" onload="this.height=700" />
  </div>
</template>
<script>
export default {

  data() {
    return {
      reportUrl: '',
      BASE_API: process.env.VUE_APP_BASE_API
    }
  },
  created() {
    if (this.$route.params && this.$route.params.file_name) {
      // 从路径获取文件
      const reportUrl = this.$route.params.file_name
      console.log(reportUrl)
      console.log(this.$route.params)
      // 调用回显
      this.reportUrl = reportUrl + '.html'
    } else {
      this.reportUrl = 'homepage.html'
    }
  }
}

</script>
