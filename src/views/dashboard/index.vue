<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ $t('test.name') }}: {{ name }}</div>
    <div class="dashboard-text">{{ $t('test.roles') }}: <span v-for="role in roles" :key="role">{{ role }}&nbsp;&nbsp;</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'permissions',
      'roles'
    ])
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
