import { TWOBRANCH } from "../components/config"
import { NodeKeyMap } from "../model"
import { FLOORHEIGHT, FLOORWIDTH, NODEQUAR } from "./config"
export interface VerifyData {
  verify: Boolean
  text: string
}

let XPOSITION: number = 0
/**
 *
 * @param node 画布每个节点 node 信息
 * @param deepY 树形数据结构第几层
 * @returns 经过坐标计算的 node 信息
 */
export function calculatePosition(
  node: NodeKeyMap,
  deepY: number = 0,
  keyToNodeMap: Record<string, any>
): NodeKeyMap {
  if(node.guid) {
    keyToNodeMap[node.guid] = node;
  }
  if (node?.children?.length) {
    let childFloorHeight = !TWOBRANCH.includes(node.type)
      ? FLOORHEIGHT
      : FLOORHEIGHT * 2
    let children: Array<NodeKeyMap> = node.children.map((child) => {
      return calculatePosition(child, deepY + NODEQUAR + childFloorHeight, keyToNodeMap)
    })
    let len = children.length
    node.position.x =
      (children[0].position.x + children[len - 1].position.x) / 2
    node.position.y = deepY
  } else {
    node.position.x = XPOSITION += FLOORWIDTH + NODEQUAR
    node.position.y = deepY
  }
  if (deepY === 0) {
    XPOSITION = 0
  }
  return node
}
