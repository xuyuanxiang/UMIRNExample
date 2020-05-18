# UMIRNExample

[umi-react-native](https://github.com/xuyuanxiang/umi-react-native#readme)示例工程。

当前 master 分支最新代码集成了：

- [DvaJS](https://dvajs.com/)
- [@ant-design/react-native](https://rn.mobile.ant.design/index-cn)
- [react-navigation](https://reactnavigation.org/)

**需要配置好 RN 开发环境：[Setting up the development environment](https://reactnative.dev/docs/environment-setup)，才能查看应用运行效果。**

## 目录

- [快速开始](#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
- [变更记录](#%E5%8F%98%E6%9B%B4%E8%AE%B0%E5%BD%95)
  - [0.0.1-初始工程](#001-%E5%88%9D%E5%A7%8B%E5%B7%A5%E7%A8%8B)
  - [0.1.0-安装 umi 和 umi-preset-react-native](#010-%E5%AE%89%E8%A3%85-umi-%E5%92%8C-umi-preset-react-native)
  - [1.0.0-集成 DvaJS](#100-%E9%9B%86%E6%88%90-dvajs)
  - [1.1.0-集成 @ant-design/react-native](#110-%E9%9B%86%E6%88%90-ant-designreact-native)
  - [1.2.0-集成 react-navigation](#120-%E9%9B%86%E6%88%90-react-navigation)

## 快速开始

从 github clone 到本地后，使用 yarn 安装依赖：

```npm
yarn
```

链接`@ant-design/react-native`字体（图标）资源文件：

```npm
yarn react-native link
```

对于**iOS**还需要进到 ios 工程目录使用 pod 安装原生依赖（Android 跳过这一步）：

```shell
cd ios && pod install && cd -
```

启动 watch 进程，监听文件变动，重新生成中间代码：

```npm
yarn watch
```

另启一个终端，启动 Android 应用：

```npm
yarn android
```

启动 iOS 应用：

```npm
yarn ios
```

## 变更记录

### 0.0.1-初始工程

使用`react-native init`得到初始代码：[0.0.1](https://github.com/xuyuanxiang/UMIRNExample/tree/0.0.1)

### 0.1.0-安装 umi 和 umi-preset-react-native

添加`umi`和`umi-preset-react-native`依赖后的代码：[0.1.0](https://github.com/xuyuanxiang/UMIRNExample/tree/0.1.0) 。

查看变更内容：

- [compare/0.0.1...0.1.0](https://github.com/xuyuanxiang/UMIRNExample/compare/0.0.1...0.1.0)

### 1.0.0-集成 DvaJS

添加`@umijs/plugin-dva`依赖后的代码：[1.0.0](https://github.com/xuyuanxiang/UMIRNExample/tree/1.0.0)。

查看变动内容：

- [compare/0.0.1...1.0.0](https://github.com/xuyuanxiang/UMIRNExample/compare/0.0.1...1.0.0)
- [compare/0.1.0...1.0.0](https://github.com/xuyuanxiang/UMIRNExample/compare/0.1.0...1.0.0)

### 1.1.0-集成 @ant-design/react-native

添加`@ant-design/react-native`依赖后的代码：[1.1.0](https://github.com/xuyuanxiang/UMIRNExample/tree/1.1.0)。

查看变动内容：

- [compare/0.0.1...1.1.0](https://github.com/xuyuanxiang/UMIRNExample/compare/0.0.1...1.1.0)
- [compare/1.0.0...1.1.0](https://github.com/xuyuanxiang/UMIRNExample/compare/1.0.0...1.1.0)

### 1.2.0-集成 react-navigation

添加`umi-plugin-react-navigation`依赖后的代码：[1.2.0](https://github.com/xuyuanxiang/UMIRNExample/tree/1.2.0)。

查看变动内容：

- [compare/0.0.1...1.2.0](https://github.com/xuyuanxiang/UMIRNExample/compare/0.0.1...1.2.0)
- [compare/1.1.0...1.2.0](https://github.com/xuyuanxiang/UMIRNExample/compare/1.0.0...1.2.0)
