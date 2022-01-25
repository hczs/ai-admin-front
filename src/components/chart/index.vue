/* eslint-disable vue/prop-name-casing */
<template>
  <!-- <div class="app-container">
    <div :id="chartid" class="line-wrap" />
  </div> -->
  <div :id="chartid" style="height: 500px; width: 60%; margin: 0 auto" />
</template>
<script>
import * as echarts from 'echarts'
export default {
  // eslint-disable-next-line vue/require-prop-types
  // props: ['chartid', 'data'],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
    // eslint-disable-next-line vue/require-default-prop
    chartid: String
  },
  data() {
    return {
      chartLine: null,
      option: {
        title: {
          show: true,
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: []
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisTick: {
              show: false,
              lineStyle: {
                type: 'dashed'
              }
            },
            // 坐标轴线相关设置
            axisLine: {
              show: true
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
              lineStyle: {
                type: 'dashed'
              }
            },
            // 坐标轴线相关设置
            axisLine: {
              show: true
            },
            name: ''
          }
        ],
        series: [],
        // 工具栏
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        axisPointer: {
          link: [
            {
              xAxisIndex: 'all'
            }
          ],
          label: {
            backgroundColor: '#777'
          }
        }
      }
    }
  },

  watch: {
    // 监控数据的变化，及时改变折线图
    data: function(newData, oldData) {
      console.log('监听到data变了')
      this.changeChartOption()
      console.log('当前option:', this.option)
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(this.option)
    }
  },

  updated() {
    console.log('updated')
    if (this.$store.state.app.language === 'zh') {
      this.changeChartOption()
    } else {
      this.changeChartOption()
    }
  },

  mounted() {
    console.log('组件data', this.data)
    this.changeChartOption()
    console.log('当前option:', this.option)
    // 使用刚指定的配置项和数据显示图表
    // this.chartLine.setOption(this.option)
    this.$nextTick(() => {
      this.drawLineChart()
    })
  },

  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById(this.chartid))// 基于准备好的dom，初始化echarts实例
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(this.option)
    },

    changeChartOption() {
      this.option.title.text = this.$t('task.' + this.data.evaluate_name)
      if (this.data.legend) {
        this.option.legend.data = this.data.legend
      }
      this.option.xAxis[0].data = this.data.xdata
      this.option.yAxis[0].name = this.data.evaluate_name
      this.option.series = this.data.data
    }
  }
}
</script>
<style scope>
    .line-wrap{
        width:100%;
        height:100%;
    }
</style>
