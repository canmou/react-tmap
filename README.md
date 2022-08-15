<br /><br />
<p align="center">
  <a href="https://github.com/canmou/react-tmap">
    <img src="https://canmou.github.io/react-tmap/website/public/logo.png" height="80px" alt="腾讯地图 React 组件 logo" />
  </a>
</p>
<h3 align="center">腾讯地图 React 组件</h3>

<p align="center">
  <a href="https://github.com/canmou/react-tmap/actions">
    <img src="https://github.com/canmou/react-tmap/workflows/Build%20and%20Deploy/badge.svg" alt="Build & Deploy">
  </a>
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
- ♻️ 不依赖任何第三方组件
- 📦 拆分多个包，按需使用

## 安装
### 集成所有的依赖包
npm install @canmou/react-tmap --save

npm install @canmou/react-tmap-map @canmou/react-tmap-api-loader --save


# 容器组件
Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap`](https://uiwjs.github.io/react-amap/) 集成所有包 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap.svg)](https://www.npmjs.com/package/@uiw/react-amap) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap/file/README.md)
[`@uiw/react-amap-api-loader`](https://uiwjs.github.io/react-amap/#/api-loader) 加载 SDK (必须) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-api-loader?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-api-loader?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-api-loader.svg)](https://www.npmjs.com/package/@uiw/react-amap-api-loader) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-api-loader/file/README.md)
[`@uiw/react-amap-map`](https://uiwjs.github.io/react-amap/#/map) 加载地图(容器) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-map?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-map?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-map.svg)](https://www.npmjs.com/package/@uiw/react-amap-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-map/file/README.md)

## 覆盖物组件

## 信息窗体

## 其它

## 开发
```
npm install
cd webisite
npm install 
npm run start

```
## website里用于做文档实例，引入ant design，方面测试开发组件
### 先绑定相关的包到website目录
```
cd website
npm link @canmou/react-tmap-api-loader @canmou/react-tmap-map @canmou/react-tmap
```

###  地图使用的基本引入组件
```
<!-- api-loader package npm link -->
npm link @canmou/react-tmap-require-script @canmou/react-tmap-types
```
### 地图类型文件引入
```
<!-- map package npm link -->
npm link @canmou/react-tmap-types

```
##  相关链接参考
* 腾讯地图API
* 腾讯地图示例
* 思路主要来自于jaywcjlove大神的react-amap组件，重新构建了一套腾讯地图相关的组件
https://github.com/uiwjs/react-amap

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/canmou/react-tmap/graphs/contributors">
  <img src="https://canmou.github.io/react-tmap/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.
