<template>
  <!-- <div style="width: 100%; height: 100%">
    <div class="dashboard-text">{{ $t('test.name') }}: {{ name }}</div>
    <div class="dashboard-text">{{ $t('test.roles') }}: <span v-for="role in roles" :key="role">{{ role }}&nbsp;&nbsp;</span></div>
  </div> -->
  <div>
    <div v-html="html" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

export default {
  name: 'Dashboard',

  data() {
    return {
      html: ''
    }
  },

  computed: {
    ...mapGetters([
      'name',
      'permissions',
      'roles'
    ])
  },

  created() {
    this.getHtml()
  },

  methods: {
    getHtml() {
      const language = Cookies.get('language')
      if (language === 'zh') {
        this.$axios.get('./process.html').then(res => {
          this.html = res.data
        })
      } else {
        this.$axios.get('./process-en.html').then(res => {
          this.html = res.data
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
