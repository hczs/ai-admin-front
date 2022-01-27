/* eslint-disable vue/prop-name-casing */
<template>
  <!-- <div class="app-container">
    <div :id="chartid" class="line-wrap" />
  </div> -->
  <div>
    <div :id="chartid" style="height: 500px; width: 60%; margin: 0 auto" />
    <!-- <div style="float: right; display: inline">hah</div> -->
  </div>
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
          // 标题居中
          // left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // type: 'scroll',
          // orient: 'vertical',
          // left: 'right',
          // top: '20%',
          // top: -10,
          // bottom: 20,
          data: [],
          width: '60%',
          // 最如果太长就...
          formatter: function(value) {
            if (value.length >= 11) {
              return value.substr(0, 10) + '...'
            } else {
              return value
            }
          },
          tooltip: {
            show: true
          }
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
            axisLabel: {
              interval: 0,
              // rotate: 40,
              // 最如果太长就...
              formatter: function(value) {
                if (value.length >= 11) {
                  return value.substr(0, 10) + '...'
                } else {
                  return value
                }
              },
              color: '#333'
            },
            // 点击事件
            // triggerEvent: true,
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
      this.chartLine = echarts.init(document.getElementById(this.chartid), null, {
        height: 500
      })// 基于准备好的dom，初始化echarts实例
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(this.option)
      // TODO 点击删除达到可自定义
      // this.chartLine.on('click', 'xAxis.category', (params) => {
      //   console.log('params:', params)
      //   console.log('componentType:', params.componentType)
      //   console.log('name:', params.name)
      //   console.log('value:', params.value)
      //   console.log('value type:', typeof (params.value))
      //   console.log('value - 1:', params.value - 1)
      //   // 删除x轴此下标
      //   this.option.xAxis[0].data.splice(params.value - 1, 1)
      //   // 删除y轴对应值
      //   console.log('删除后的x轴：', this.option.xAxis[0].data)
      //   // 重新渲染
      //   this.chartLine.setOption(this.option)
      // })
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
