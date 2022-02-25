<template>
  <div style="height: auto">
    <iframe
      id="iframeBox"
      :src="reportUrl"
      frameborder="0"
      width="100%"
      height="auto"
      scrolling="auto"
      onload="this.height=1000"
    />
  </div>
</template>
<script>
import i18n from '@/lang'
export default {

  data() {
    return {
      reportUrl: '',
      BASE_API: window.global_url.Base_url
    }
  },
  // eslint-disable-next-line space-before-blocks
  mounted(){
    /**
     * iframe-宽高自适应显示
     */
    const oIframe = document.getElementById('iframeBox')
    // const deviceWidth = document.documentElement.clientWidth
    const deviceHeight = document.documentElement.clientHeight
    // oIframe.style.width = (Number(deviceWidth) - 220) + 'px' // 数字是页面布局宽度差值
    oIframe.style.height = (Number(deviceHeight) - 60) + 'px' // 数字是页面布局高度差
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
      this.trajectoriesTip()
    } else {
      this.reportUrl = 'homepage.html'
    }
  },
  methods: {
    back() {
      this.$router.go(-1)// 返回上一层
    },

    // 轨迹类型的数据集添加弹窗提示
    trajectoriesTip() {
      const trajectories = ['Gowalla', 'BrightKite', 'Fousquare', 'Instagram', 'Chengdu_Taxi_Sample1', 'Beijing_Taxi_Sample', 'Seattle']
      trajectories.forEach((item) => {
        if (this.reportUrl.toUpperCase().indexOf(item.toUpperCase()) !== -1) {
          // 弹窗提醒
          this.$notify.info({
            // title: i18n.t('dataset.gisSuccessfully'),
            message: i18n.t('dataset.trajTip'),
            duration: 10000
          })
        }
      })
    }
  }
}

</script>
