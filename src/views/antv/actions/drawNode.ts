import { guid } from "@/utils"
import { NODEQUAR, FLOORHEIGHT, STARTPOINTX, STARTPOINTY } from "./config"
import { nodeKeyMap } from "../config"
import { ONEBRANCH, TWOBRANCH } from "../components/config"
// startX, startY 为根节点，刚计算后的位置坐标
let { x: startX, y: startY } = nodeKeyMap.position
export function addGraphNode(
  graph: any,
  x: number,
  y: number,
  data: any = {},
  id = ""
) {
  let { children, position, ...others } = data
  graph.addNode({
    id,
    shape: "vue-shape",
    x: x - nodeKeyMap.position.x + STARTPOINTX,
    y: y - nodeKeyMap.position.y + STARTPOINTY,
    width: NODEQUAR,
    height: NODEQUAR,
    component: "nodeComponent",
    movable: false,
    draggable: true,
    data: {
      ...others,
      guid: id
    }
  })
}

export function drawGraphNode(
  graph: any,
  node: any,
  // nodeKeyMap: any,
  keyToNodeMap: any
) {
  // let { x: startX, y: startY } = nodeKeyMap.position
  addGraphNode(
    graph,
    node.position.x,
    node.position.y,
    { type: node.type, ...node },
    node.guid
  )
  if (node?.children?.length) {
    let lineTextArr: Array<string> | null = null
    node.children.forEach((child: any) => {
      drawGraphNode(graph, child, keyToNodeMap)
      addEdge(graph, node.guid, child.guid, keyToNodeMap)
    })
  }
}

export function addEdge(
  graph: any,
  sourceId: string,
  targetId: string,
  keyToNodeMap: Record<string, any>
) {
  // let { x: startX , y: startY } = nodeKeyMap.position; // 获取 根节点 坐标
  let { position: sourcePosition, type } = keyToNodeMap[sourceId]
  let targetPosition = keyToNodeMap[targetId].position
  // 有分支时候，要途经的点， node {x, y} 为节点左上角坐标
  let vertices = [
    // NODEWIDTH = 节点宽度  startX = 根节点 x 轴坐标  STARTPOINTX = x 轴平移距离  NODEHEIGHT = 节点高度  FLOORHEIGHT = 节点上下间距
    {
      x: sourcePosition.x + NODEQUAR / 2 - nodeKeyMap.position.x + STARTPOINTX,
      y: sourcePosition.y + NODEQUAR +FLOORHEIGHT - nodeKeyMap.position.y + STARTPOINTY
    },
    {
      x: targetPosition.x + NODEQUAR / 2 - nodeKeyMap.position.x + STARTPOINTX,
      y: targetPosition.y - FLOORHEIGHT - nodeKeyMap.position.y + STARTPOINTY
    }
  ]
  graph.addEdge({
    source: sourceId,
    target: targetId,
    connector: { name: "normal" },
    inherit: "edge",
    vertices: !TWOBRANCH.includes(type) ? [] : vertices,
    attrs: {
      line: {
        stroke: "#3D83F1"
      }
    }
  })
}
