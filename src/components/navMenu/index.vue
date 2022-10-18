<template>
  <aside>
    <h1 class="sider-logo" :class="{'sider-collapse': isCollapse}">
      <!-- <i class="sider-logo-bg"></i> -->
      <span v-show="!isCollapse">DEMO展示平台</span>
    </h1>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <template #title>ANTV X6</template>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useMainStore } from '@/store/common'

export default defineComponent({
    setup() {
        const commonStore = useMainStore();
        return {
          isCollapse: computed(() => commonStore.siderIsCollapse)
        };
    },
});
</script>
<style lang="less" scoped>
.sider-logo {
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1.8px;
    background: #fff;
    color: #355287;
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, .08);
    padding: 0 3px;
    white-space: nowrap;
    overflow: hidden;
    transition: all .5s linear;
    margin-top: 0px;
    & > span {
        vertical-align: top;
    }
    .sider-logo-bg {
        display: inline-block;
        width: 50px;
        height: 45px;
        vertical-align: middle;
        margin-top: -3px;
        background: url('../../common/img/logo.ico') center center no-repeat;
        background-size: 70%;
    }
}

.sider-collapse {
    & > span {
        transform: scaleX(0);
    }
}
</style>