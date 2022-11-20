import {
  ref,
  Ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch,
  onMounted,
  nextTick
} from "vue"
import "@antv/x6-vue-shape"
import { getIcon } from "@/utils"
import "./index.less"
import strategicMenu from "./components/strategicMenu.vue"
import {
  initPicture,
  initGraphAction,
  addGraphNode,
  calculatePosition,
  drawGraphNode,
  addEdge
} from "./actions"
import { ONEBRANCH, TWOBRANCH } from "./components/config"
import { nodeKeyMap, keyToNodeMap, initNodeData } from "./config"

export default defineComponent({
  name: "antv",
  components: {
    strategicMenu
  },
  setup(props, { emit, slots }) {
    let graph: any = null
    let memoryNode: Ref = ref("")
    /**
     * 计算数据节点位置， 重绘 画布
     */
    function nodeDiffDraw() {
      calculatePosition(nodeKeyMap, 0, keyToNodeMap) // 计算节点 位置坐标
      graph.clearCells() // 清空画布
      drawGraphNode(graph, nodeKeyMap, keyToNodeMap)
    }
    onMounted(() => {
      graph = initPicture()
      initGraphAction(graph, memoryNode)
    })
    nextTick(() => {
      nodeDiffDraw()
    })
    function addNode(type: string) {
      if(!memoryNode.value) {
        alert('请把拖入 + 节点中');
        return;
      }
      let { guid } = memoryNode.value.getData();
      let nodeDate = keyToNodeMap[guid]
      nodeDate.type = type;
      if(ONEBRANCH.includes(type)) {
        nodeDate.children = [initNodeData('download')]
      } else if(TWOBRANCH.includes(type)) {
        nodeDate.children = [initNodeData('download'), initNodeData('download')]
      }
      nextTick(() => {
        nodeDiffDraw()
      })
    }
    return () => {
      return (
        <div class="strategic-canvas">
          <section class="left">
            <strategicMenu onAddNode={addNode} />
          </section>
          <section class="right">
            <div ref="picture" class="picture" id="picture"></div>
          </section>
        </div>
      )
    }
  }
})
