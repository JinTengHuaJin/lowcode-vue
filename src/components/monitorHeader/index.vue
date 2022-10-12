<template>
    <header :class="'shadow-show'">
        <i class="sider-trigger-icon" :class="{'sider-trigger-icon-reverse': isCollapse}" @click="changeCollapse"></i>
        <ul class="header-nav">
        </ul>
        <div class="header-menu"></div>
    </header>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useMainStore } from '@/store/common'
export default defineComponent({
    setup() {
      const commonStore = useMainStore();
      console.log(commonStore, 'commonStore');
      function changeCollapse(params) {
        commonStore.setCollapse(!commonStore.siderIsCollapse)
      }
      return {
        isCollapse: computed(() => commonStore.siderIsCollapse),
        changeCollapse
      }
    }
});
</script>

<style lang="less" scoped>
header {
    position: relative;
    height: 64px;
    background: #fff;
    z-index: 1000;
    &.shadow-show {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }
}

.sider-trigger-icon {
    position: absolute;
    top: 10px;
    left: 0;
    width: 42px;
    height: 42px;
    background: url('../../common/svg/icon.svg') no-repeat;
    background-position: -233px -717px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    &-reverse {
      background-position: -287px -717px;
    }
}

.header-nav {
    height: 100%;
    float: left;
    margin-left: 170px;
    margin-top: 35px;
}

.header-menu {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    font-size: 0;
}
.messageIcon {
    font-size: 24px;
}
.messageFlag {
    width: 50px;
    color: red;
    font-size: 14px;
    cursor: pointer;
    display: flex;
}
</style>
