---
sidebarDepth: 3
---

# mdpress-plugin-serve <GitHubLink repo="mdpress/mdpress-community"/>

在本地使用静态服务器，测试 MdPress 的 build 结果。

## 安装

```sh
npm install -D mdpress-plugin-serve
```

## 使用

```js
// .mdpress/config.js
module.exports = {
  plugins: [
    [
      "mdpress-plugin-serve",
      {
        post: 1234,
        staticOptions: {
          dotfiles: "allow",
        },
        beforeServer(app, server) {
          app.get("/path/to/my/custom", function (req, res) {
            res.json({ custom: "response" });
          });
        },
      },
    ],
  ],
};
```

## 配置项

### commandName

- **类型:** `string`
- **默认值:** `'serve'`

mdpress-plugin-serve 会增加一个 mdpress 命令，这个选项可用于自定义命令名称。

### host

- **类型:** `string`
- **默认值:** `siteConfig.host || 'localhost'`

指定服务器的主机名。

### port

- **类型:** `number`
- **默认值:** `siteConfig.port || 8080`

指定服务器监听的端口。

### notFoundPath

- **类型:** `string`
- **默认值:** `'404.html'`

404 页面的路径（相对于 `dest` 目录）。

### staticOptions

- **类型:** `object`
- **默认值:** `{}`

提供给 [serve-static](https://github.com/expressjs/serve-static#servestaticroot-options) 的选项。

### beforeServer

- **类型:** `(app, server) => void | Promise<void>`
- **默认值:** `undefined`

在服务器接受客户端信息之前执行。类似于 MdPress 的 [beforeDevServer](https://linfeng1997.github.io/mdpress-community/zh/plugin/option-api.html#beforedevserver) 选项。

### afterServer

- **类型:** `async (app, server) => void | Promise<void>`
- **默认值:** `undefined`

在服务器接受客户端信息之后执行。类似于 MdPress 的 [afterDevServer](https://linfeng1997.github.io/mdpress-community/zh/plugin/option-api.html#afterdevserver) 选项。

## CLI

使用了这个插件以后，MdPress 会新增一个 `serve` 命令。这个命令会使用已经生成的文件来构建服务器。它拥有以下的选项：

### --build

在构建服务器前先执行一轮 `mdpress build`。

### --open

当服务端准备就绪时自动打开浏览器。

### --host `<host>`

参见 [host](#host)。

### --port `<port>`

参见 [port](#port)。

::: tip
MdPress 内置的命令行选项，如 `--dest <dest>`, `--cache [cache]`, `--no-cache`，也都是支持的。
:::
