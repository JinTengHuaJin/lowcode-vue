const modules = import.meta.glob("../assets/icon/*");
let imgModules:any = {};

for (const key in modules) {
  modules[key]().then((res:any)=>{
    console.log(res.default, 'modules res');
    imgModules[key] = res.default;
  })
}

// 获取assets静态资源
export default function getAssetsFile(url: string) {
  const path = `../assets/${url}`;
  console.log(path, 'getAssetsFile');
  return imgModules[path];
};
