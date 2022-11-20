<template>
  <div class="strategic-menu">
    <div v-for="menu in menuList" :key="menu.type" class="menu">
      <p class="menu-title">{{ menu.type }}</p>
      <draggable
        force-fallback="true"
        :sort="false"
        :list="menu.children"
        class="item-list"
        @start="onStart"
        @end="onEnd">
        <template #item="{ element }">
          <section :data-type="element.type">
            <li class="menu-item">
              <div class="menu-item-bg">
                <div class="img-content">
                  <img :src="getIcon(`../assets/icon/${element.type}.png`)"/>
                </div>
              </div>
            </li>
          </section>
          </template>
        </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs';
import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch,
  onMounted
} from "vue"
import { getIcon, getAssetsFile } from "@/utils";
import draggable from "vuedraggable";
import { menuList, MenuItem } from "./config";
export default defineComponent({
  name: "strategicMenu",
  components: {
    draggable
  },
  setup(props, {
    emit,
    slots
  }) {
    function onEnd(evt: any, e: any) {
      emit('addNode', evt.item.dataset.type)
    }
    function onStart(evt: any, e: any) {
      // emit('addNode', evt.item.dataset.type)
    }
    return {
      getIcon,
      getAssetsFile,
      menuList,
      onStart,
      onEnd,
      drag: false,
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
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
    justify-content: space-between;
    .menu-item {
      align-items: center;
      cursor: pointer;
      justify-content: center;
      margin-bottom: 10px;
      width: fit-content;
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