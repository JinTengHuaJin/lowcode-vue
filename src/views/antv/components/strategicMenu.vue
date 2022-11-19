<template>
  <div class="strategic-menu">
    <div v-for="menu in menuList" :key="menu.type" class="menu">
      <p class="menu-title">{{ menu.type }}</p>
      <ul class="item-list">
        <section style="width: 100%">
          <li class="menu-item" v-for="subMenu in menu.children" draggable="true" :key="subMenu.type">
            <div class="menu-item-bg">
              <div class="img-content">
                <img :src="getIcon(`../assets/icon/${subMenu.type}.png`)"/>
              </div>
            </div>
          </li>
        </section>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch
} from "vue"
import { getIcon, getAssetsFile } from "@/utils";
import { menuList, MenuItem, draggableOptions } from "./config";
export default defineComponent({
  name: "strategicMenu",
  components: {
  },
  setup(props, {
    emit,
    slots
  }) {
    function end(evt: any, e: any) {
      console.log(evt, e, 'evt, e');
      // emit('addNode')
    }
    function start() {
      // emit('addNode')
    }
    return {
      getIcon,
      getAssetsFile,
      menuList,
      start,
      end,
      drag: false,
      draggableOptions,
      myArray: [],
      element: {
        id: 100,
        name: 'element test'
      }
    }
  }
})
</script>
<style lang="less" scoped>
.strategic-menu {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 8px;
  .menu {
    margin-bottom: 5px;
  }
  .menu-title {
    font-size: 16px;
    margin-bottom: 6px;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #888;
    text-align: left;
  }

  .item-list {
    & > section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .menu-item {
      align-items: center;
      cursor: pointer;
      justify-content: center;
      margin-bottom: 10px;
      .menu-item-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 48px;
        height: 48px;
        background: #F4F8FF;
        border-radius: 8px;
        .img-content {
          img {
            width: 36px;
            height: 36px;
          }
        }
      }
    }
  }
}
</style>