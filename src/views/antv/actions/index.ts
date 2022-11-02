import { Graph, Shape, DataUri } from "@antv/x6"

export function initPicture() {
  new Graph({
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
  ;(Graph as any).registerVueComponent(
    "strategyNode-component",
    {
      template: `<node-com></node-com>`,
      data() {
        return {}
      },
      methods: {},
      components: {
        nodeCom
      }
    },
    true
  )
}
