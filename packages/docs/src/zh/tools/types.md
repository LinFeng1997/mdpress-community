---
sidebarDepth: 3
---

# mdpress-types <GitHubLink repo="mdpress/mdpress-community"/>

目前 MdPress 并没有支持 typescript ，并且没有提供类型定义。

<!--
[mdpress-plugin-typescript](../plugins/typescript.md) 提供了在 VuePress 中使用 typescript 的部分能力。如果你想获取到正确的类型定义，你可以配合 `mdpress-types` 一起使用。
-->

::: warning 实验中
`mdpress-types` 作为 MdPress 的类型定义包，还处于实验阶段。如果你在使用时发现任何问题，欢迎提出 Issue 。
:::

## 安装

```sh
npm install -D mdpress-types
```

## 使用

你可以选择下列 **一种** 方式使用它：

### 手动引入

你可以手动在 `.ts` 文件中引入

### 添加到 tsconfig

你可以把它添加到 `tsconfig.json` 的 `compilerOptions.types` 中：

> 参考 [`tsconfig.json` 文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types)

```json {3}
{
  "compilerOptions": {
    "types": ["mdpress-types"]
  }
}
```
