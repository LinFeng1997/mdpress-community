---
sidebarDepth: 3
---

# mdpress-types <GitHubLink repo="mdpress/mdpress-community"/>

Currently MdPress does not support typescript, and does not provide types definition.

<!--
[mdpress-plugin-typescript](../plugins/typescript.md) provides part of the ability to use typescript in MdPress. If you want to get the correct types definition, you can try to use `mdpress-types` together.
-->

::: warning EXPERIMENTAL
`mdpress-types` is an experimental package for MdPress types definition. Feel free to open an issue if you find it does not work as expected.
:::

## Installation

```sh
npm install -D mdpress-types
```

## Usage

You can choose **ONE OF** the following approaches to use it:

### Import it manually

You can import it manually in your `.ts` files.

### Add it to tsconfig

You can add it to the `compilerOptions.types` of your `tsconfig.json`:

> See [docs of `tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types)

```json {3}
{
  "compilerOptions": {
    "types": ["mdpress-types"]
  }
}
```
