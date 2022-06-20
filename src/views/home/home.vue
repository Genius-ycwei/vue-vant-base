<!--
 * @Author:       ycwei
 * @Date:         2022-05-07 20:01:30
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-09 17:36:10
 * @Description:  主页
 -->
<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>

export default {
	name: 'home',
  data() {
    return {
      active: 0,
    }
  } ,
  methods: {
    
  }
}

</script>
