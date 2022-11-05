import { Graph, Shape, DataUri } from "@antv/x6"
import nodeDom from "../components/nodeDom";

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

export function initGraphAction(graph: any) {
  graph.on('node:mouseenter', () => {
    // debugger;
  })
}
