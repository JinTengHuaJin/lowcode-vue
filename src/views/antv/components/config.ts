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
  'decode',   'download', 'edit',
  'fire',     'label',    'like',
  'location', 'mes',      'next',
  'notes',    'password', 'pause',
  'personal', 'photo',    'picture',
  'play',     'pre',      'review',
  'search',   'set',      'share',
  'speed',    'step',     'store',
  'time',     'upload',   'vip',
  'zan'
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

export const pushDataInit = {
    frequencyType: 1,
    frequencyTypeStart: 1, // 开始节点中频次控制类型
    frequencyCount: '',
    sendLimit: 1, // 发送限制
    sendLimitInput: '', // APP
    sendLimitUnit: 1,
    pushApp: 'homework',
    title: '',
    content: '',
    url: '',
    imgUrl: '',
    pushType: 1
}