<br /><br />
<p align="center">
  <a href="https://github.com/canmou/react-tmap">
    <img src="https://canmou.github.io/react-tmap/logo.svg" height="80px" alt="腾讯地图 React 组件 logo" />
  </a>
</p>
<h3 align="center">腾讯地图 React 组件</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/@canmou/react-tmap">
    <img src="https://img.shields.io/npm/dm/@canmou/react-tmap.svg?style=flat" alt="Downloads">
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@canmou/react-tmap/file/README.md">
    <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg">
  </a>
  <a href="https://www.npmjs.com/package/@canmou/react-tmap">
    <img src="https://img.shields.io/npm/v/@canmou/react-tmap.svg" alt="npm version">
  </a>
</p>

## 特性
- 📚 自动加载腾讯地图SDK
- ♻️ Typescript编写，集成腾讯地图的声明文件
- ⚛️ 不依赖任何第三方组件
- 📦 拆分多个包，按需使用

## 安装
### 集成所有的依赖包
```
npm install @canmou/react-tmap --save

npm install @canmou/react-tmap-map @canmou/react-tmap-api-loader --save
```

## 容器组件
Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@canmou/react-amap`](https://canmou.github.io/react-amap/) 集成所有包 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@canmou/react-tmap?color=green&label=)](https://bundlephobia.com/package/@canmou/react-tmap) | [![npm version](https://img.shields.io/npm/v/@canmou/react-tmap.svg)](https://www.npmjs.com/package/@canmou/react-tmap) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://canmou.github.io/npm-unpkg/#/pkg/@canmou/react-tmap/file/README.md)
[`@uiw/react-amap-api-loader`](https://uiwjs.github.io/react-amap/#/api-loader) 加载 SDK (必须) | [![bundle size](https://img.shields.io/bundlephobia/min/@canmou/react-tmap-api-loader?color=3789D6&label=)](https://bundlephobia.com/package/@canmou/react-tmap-api-loader) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@canmou/react-tmap-api-loader?color=green&label=)](https://bundlephobia.com/package/@canmmou/react-tmap-api-loader) | [![npm version](https://img.shields.io/npm/v/@canmou/react-tmap-api-loader.svg)](https://www.npmjs.com/package/@canmou/react-tmap-api-loader) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://canmou.github.io/npm-unpkg/#/pkg/@canmou/react-tmap-api-loader/file/README.md)
[`@canmou/react-tmap-map`](https://canmou.github.io/react-tmap/#/map) 加载地图(容器) | [![bundle size](https://img.shields.io/bundlephobia/min/@canmou/react-tmap-map?color=3789D6&label=)](https://bundlephobia.com/package/@canmou/react-tmap-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@canmou/react-tmap-map?color=green&label=)](https://bundlephobia.com/package/@canmou/react-tmap-map) | [![npm version](https://img.shields.io/npm/v/@canmou/react-tmap-map.svg)](https://www.npmjs.com/package/@canmou/react-tmap-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://canmou.github.io/npm-unpkg/#/pkg/@canmou/react-tmap-map/file/README.md)

## 开发
```
npm install
cd webisite
npm install 
npm run start

```
### website里用于做文档实例，引入ant design，方面测试开发组件
#### 先绑定相关的包到website目录
```
cd website
npm link @canmou/react-tmap-api-loader @canmou/react-tmap-map @canmou/react-tmap
```

####  地图使用的基本引入组件
```
<!-- api-loader package npm link -->
npm link @canmou/react-tmap-require-script @canmou/react-tmap-types
```
#### 地图类型文件引入
```
<!-- map package npm link -->
npm link @canmou/react-tmap-types
```
##  相关链接参考
* 腾讯地图API
* 腾讯地图示例
* 思路主要来自于jaywcjlove的react-amap组件，重新构建了一套腾讯地图相关的组件
https://github.com/uiwjs/react-amap


## License

Licensed under the MIT License.
