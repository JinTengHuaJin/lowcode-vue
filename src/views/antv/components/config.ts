export interface MenuItem {
  type: string,
  children?: Array<any>
}
export interface SelectItem {
  readonly key: string | number,
  readonly value: string
}
let actionGroup = [
  'back',     'classify', 'clear',
  'decode',   'edit',     'zan',
  'fire',     'label',    'like',
  'location', 'mes',      'next',
  'notes',    'password', 'pause',
  'personal', 'photo',    'picture',
  'review',     'pre',      
  // 'play',
  // 'search',   'set',      'share',
  // 'speed',    'step',     'store',
  // 'time',     'upload',   'vip'
];
const actionGroupMid = Math.ceil(actionGroup.length / 2); // 15
export const menuList:Array<MenuItem> = [];
const intItem = (type:string, level: 0 | 1) => (level ? { type } : { type, children: []})
actionGroup.forEach((type, index) => {
  if([ 0, actionGroupMid ].includes(index)) {
    menuList.push(intItem(index ? '条件' : '执行', 0));
  }
  let indexLevel = Math.floor(index / actionGroupMid);
  menuList[indexLevel].children?.push(intItem(type, 1));
})

export const frequencyTypeOptions:Array<SelectItem> = [
  { key: 1, value: '活动期间' },
  { key: 2, value: '每天' }
]

export const ONEBRANCH = menuList[0].children!.map((item) => item.type) // 有一个分支的节点，对应执行节点
export const TWOBRANCH = menuList[1].children!.map((item) => item.type) // 有两个分支的节点，对应条件节点
