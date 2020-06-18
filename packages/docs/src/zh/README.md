---
sidebar: false
---

# VuePress 社区

社区维护的 VuePress 生态系统。

## 插件

|                       名称                        |                        版本                        | 介绍                                         |
| :-----------------------------------------------: | :------------------------------------------------: | :------------------------------------------- |
|           [migrate](plugins/migrate.md)           |      <NpmLink pkg="vuepress-plugin-migrate"/>      | :paw_prints: 从其他网站迁移到 VuePress       |
|             [serve](plugins/serve.md)             |       <NpmLink pkg="vuepress-plugin-serve"/>       | :key: 在本地构建静态 VuePress 服务器         |
|     [smooth-scroll](plugins/smooth-scroll.md)     |   <NpmLink pkg="vuepress-plugin-smooth-scroll"/>   | :roller_coaster: 在 VuePress 中使用平滑滚动  |
|        [typescript](plugins/typescript.md)        |    <NpmLink pkg="vuepress-plugin-typescript"/>     | :palm_tree: 在 VuePress 中支持 TypeScript    |

## 工具

|                   名称                   |                版本                 | 介绍                                              |
| :--------------------------------------: | :---------------------------------: | :------------------------------------------------ |
| [vuepress-mergeable](tools/mergeable.md) | <NpmLink pkg="vuepress-mergeable"/> | :crystal_ball: 定制化 VuePress 插件选项合并的方式 |
|     [vuepress-types](tools/types.md)     |   <NpmLink pkg="vuepress-types"/>   | :palm_tree: VuePress 的类型定义                   |



@flowstart
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend
