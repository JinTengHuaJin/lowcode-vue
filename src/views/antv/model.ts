interface Positon {
    x: number;
    y: number;
}
export interface NodeKeyMap {
  guid: string;
  type: string;
  position: Positon;
  children?: Array<NodeKeyMap>;
}

