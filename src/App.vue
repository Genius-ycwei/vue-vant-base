<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import { test } from '@/apis/home.js'
import http from '@/apis/index.js'
export default {
  name: 'App',
  data() {
    return {}
  },
  created() {}
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
