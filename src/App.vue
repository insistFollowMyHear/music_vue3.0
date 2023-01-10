<script>
import Header from './components/header/header.vue'
import Tab from './components/tab/tab.vue'

export default {
  components: {
    mHeader: Header,
    Tab
  }
}
</script>

<template>
  <div>
    <m-header></m-header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>
