## vite 相关
##### 图片动态加载
浏览器中 require 是 webpack 实现的，vite 中不支持 require
所以图片动态加载中，要用自定义的方法处理
```js
function getIcon(url: string) {
  return new URL(url, import.meta.url).href;
}
```
 