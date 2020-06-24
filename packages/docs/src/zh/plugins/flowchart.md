---
sidebar: auto
---

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

## 安装

```bash
yarn add mdpress-plugin-flowchart -D
```

## 用法

```js
// .mdpress/config.js
module.exports = {
  plugins: ["flowchart"],
};
```

## 语法

```markdown
@flowstart [preset]

<!-- 你的流程图代码 -->

@flowend
```

`mdpress-plugin-flowchart` 依赖 [flowchart.js](https://github.com/adrai/flowchart.js)。

可用的预设配置有：

- `mdpress` （默认）
- `ant`

参考当前可用的[预设配置](https://github.com/LinFeng1997/mdpress-community/tree/master/packages/mdpress-plugin-flowchart/lib/presets), feel free to submit your own preset. : )

### 开始和结束

- `[Variable]->start: [Text]`
- `[Variable]->end: [Text]`

```markdown
@flowstart
st=>start: Start
e=>end: End

st->e
@flowend
```

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

### 操作

- `[Variable]->operation: [Text]`

```markdown
@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend
```

@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend

### 输入和输出

- `[Variable]->inputoutput: [Text]`

```markdown
@flowstart
process=>inputoutput: Inputoutput
e=>end: End

process->e
@flowend
```

@flowstart
process=>inputoutput: Inputoutput
e=>end: End

process->e
@flowend

### 子程序

- `[Variable]->subroutine: [Text]`

```markdown
@flowstart
process=>subroutine: Subroutine
e=>end: End

process->e
@flowend
```

@flowstart
process=>subroutine: Subroutine
e=>end: End

process->e
@flowend

### 条件分支

- `[Variable]->condition: [Text]`
- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

```markdown
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend

### 平行

- `[Variable]->parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

```markdown
@flowstart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
@flowend
```

@flowstart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
@flowend

## 示例

### #1 普通流程

```md
@flowstart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
@flowend
```

@flowstart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
@flowend

### #2 复杂流程

```md
@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
```

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

### #3 Ant 预设配置

```markdown
@flowstart ant
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
```

@flowstart ant
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
