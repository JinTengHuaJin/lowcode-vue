<template>
  <div class="wrapper flex flex-row w-full transition-all duration-500 ease-in-out">
    <div ref="sider"
      class="layout-sider-transition transition-all duration-500 ease-in-out h-full bg-white relative w-60"
      :class="isCollapse ? ['layout-sider-collapsed', 'w-16', 'bg-white', 'shadow'] : 'layout-sider relative'"
    >
      <navMenu/>
    </div>
    <div class="monitor-layout flex flex-col flex-auto bg-info-light-9 h-full overflow-hidden">
      <div class="layout-header h-16 leading-16 flex-initial p-0">
        <monitorHeader @trigger="changeCollapse" :isCollapse="isCollapse"></monitorHeader>
      </div>
      <div class="layout-content flex-auto overflow-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import navMenu from "@/components/navMenu/index.vue"
import monitorHeader from "@/components/monitorHeader/index.vue"
import { useMainStore } from '@/store/common'

export default defineComponent({
  name: 'App',
  components: {
    navMenu,
    monitorHeader
  },
  setup() {
    const commonStore = useMainStore()
    return {
      isCollapse: computed(() => commonStore.siderIsCollapse),
      changeCollapse: () => commonStore.setCollapse(false)
    }
  }
})
</script>

<style lang="less">
.wrapper {
  height: 100%;
  .el-menu {
    border-right: none;
  }
}
</style>