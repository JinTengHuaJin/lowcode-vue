<script setup lang="ts">
import { ref } from "vue"
import HelloWorld from "./components/HelloWorld"
import msg from "./msg"
import { Home } from "./views"

import { useMainStore } from "@/store"
import { storeToRefs } from "pinia"
defineProps<{ msg: string }>()
const count = ref(0)
const mainStore = useMainStore()
const { count: storeCount } = storeToRefs(mainStore)
const add = () => {
  //适合多字段改变
  // mainStore.$patch({
  //   name: "arch",
  //   count: mainStore.count + 1
  // })
}
const add2 = () => {
  //适合多字段改变
  mainStore.$patch((state) => ({
    name: "arch2",
    count: mainStore.count + 2
  }))
}
</script>

<template>
  home use
  <router-view></router-view>
</template>
<style lang="less">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>