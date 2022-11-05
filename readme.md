## vite 相关
##### 图片动态加载
浏览器中 require 是 webpack 实现的，vite 中不支持 require
所以图片动态加载中，要用自定义的方法处理
```js
function getIcon(url: string) {
  return new URL(url, import.meta.url).href;
}
```
由于 import.meta.url 表示 http://localhost:port/src/utils/getIcon.ts
所以 url 表示的是，图片先对 src/utils/getIcon 的位置
例如：
想获取 http://localhost:5173/src/assets/icon/clear.png
那么无论在哪调用都是使用
```js
getIcon(`../assets/icon/clear.png`)
```
