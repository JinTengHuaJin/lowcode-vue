import { Ref } from "vue"
import { Graph, Shape, DataUri } from "@antv/x6"
import { Writeable } from "@/modal/utils"
import nodeDom from "../components/nodeDom"
import { NODEQUAR } from "./config"

export function initPicture() {
  ;(Graph as any).registerVueComponent(
    "nodeComponent",
    {
      template: `<nodeDom></nodeDom>`,
      data() {
        return {}
      },
      methods: {},
      components: {
        nodeDom
      }
    },
    true
  )
  return new Graph({
    container: document.getElementById("picture") as HTMLDivElement,
    width: 2200,
    height: 1000,
    grid: true, // 显示坐标格子
    translating: {
      restrict(view) {
        // node 禁止移动
        const cell = view.cell
        return {
          x: cell.getBBox().x,
          y: cell.getBBox().y,
          width: 0,
          height: 0
        }
      }
    },
    panning: {
      enabled: true,
      eventTypes: ["leftMouseDown", "rightMouseDown"]
    },
    mousewheel: {
      enabled: true,
      modifiers: ["ctrl", "meta"]
    },
    clipboard: {
      enabled: true
    },
    selecting: {
      enabled: true
    },
    keyboard: {
      enabled: true,
      global: true
    },
    connecting: {
      snap: true,
      allowBlank: false,
      allowMulti: "withPort",
      allowLoop: false,
      allowEdge: false,
      allowPort: false,
      highlight: true,
      router: {
        name: "manhattan"
      }
    }
  })
}

export function initGraphAction(graph: any, MNode: Ref) {
  graph.on("node:mouseenter", ({ e, node }) => {
    let target: Writeable<HTMLElement> | null = e.target
    /**
     * 实现节点复制 到 + 添加节点的逻辑
     * cloneNode nodeCom.vue 文件 dragStart 事件中记录的 复制的起始节点
     */
    node.setData({ jin: "hua" })
    while (target) {
      if (target?.dataset?.type === "download") {
        // 给 + 节点，鼠标移入时，添加高亮
        ;(target.style as any) = `
            box-shadow: 0 0 5px #03e9f4,
            0 0 5px #03e9f4,
            0 0 10px #03e9f4,
            0 0 20px #03e9f4;`
        // break
        // }
        MNode.value = node
        break
      }
      target = target!.parentNode as Writeable<HTMLElement>
    }
  })
  // 当鼠标移出 + 节点时，节点去除 高亮
  graph.on("node:mouseleave", ({ e }) => {
    let target: Writeable<HTMLElement> | null = e.target
    while (target) {
      if (target.className === "node-component") {
        ;(target.style as unknown) = ``
        MNode.value = null;
        break
      }
      target = target.parentNode as Writeable<HTMLElement> | null
    }
  })
}
