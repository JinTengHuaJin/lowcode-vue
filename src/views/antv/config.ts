import { NodeKeyMap } from "./model"
import { guid } from "@/utils"
export function initNodeData(type: string) {
  return {
    guid: guid(),
    type,
    position: {
      x: 0,
      y: 0
    },
    children: []
  }
}
export const nodeKeyMap: NodeKeyMap = {
  guid: guid(),
  type: "play",
  position: {
    x: 0,
    y: 0
  },
  children: [initNodeData('download')]
}

export const keyToNodeMap: Record<string, any> = {}
