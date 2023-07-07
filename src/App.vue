<script setup lang="ts">
const router = useRouter()
const route = useRoute()

// 用于判断是否是主页的页面，如不是关闭tabbar
const path = computed(() => router.currentRoute.value)
const isShow = computed(() => {
  return ['/', '/originality', '/fine', '/game', '/my'].includes(path.value.path)
})
</script>

<template>
  <div>
    <router-view v-if="!route.meta.keepAlive" />
    <keep-alive>
      <router-view v-if="route.meta.keepAlive" />
    </keep-alive>
    <tabbar v-show="isShow" />
  </div>
</template>

<style scoped>
#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100% !important;
  height: 100%;
  font-size: 16px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
}
</style>
