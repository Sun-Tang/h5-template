<script setup lang="ts">
const active = ref(0)
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">
      首页
    </van-tabbar-item>
    <van-tabbar-item icon="tv-o" to="/originality">
      原创
    </van-tabbar-item>
    <van-tabbar-item icon="fire-o" to="/fine">
      精选
    </van-tabbar-item>
    <van-tabbar-item icon="hot-o" to="/game">
      娱乐
    </van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/my">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>
