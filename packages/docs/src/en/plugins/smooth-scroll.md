---
sidebarDepth: 3
---

# mdpress-plugin-smooth-scroll <GitHubLink repo="mdpress/mdpress-community"/>

Make scrolling smooth in your MdPress site.

## Installation

```sh
npm install -D mdpress-plugin-smooth-scroll
```

## Usage

### Use this plugin

```js
// .mdpress/config.js
module.exports = {
  plugins: ["mdpress-plugin-smooth-scroll"],
};
```

## Details

This plugin simply does two things:

1. Use `window.scrollTo({ behavior: 'smooth' })` for [scrollBehavior](https://github.com/ytase/react-router-scroll#basic-usage)

- [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Browser_Compatibility)
- [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll)

2. Add `scroll-behavior: smooth;` to the `<html>` element

- [Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#Browser_compatibility)

::: tip

- The first one only works with `<Link to="#anchor">`
- The second one works with both `<Link to="#anchor">` and `<a href="#anchor">`

You may notice that the browser compatibility of this two features are quite different, so we currently use both of them.

For better browser compatibility, we suggest to use `<Link to="#anchor">` in your markdown file if possible.
:::

## Demo

- Click the links in the sidebar
- Click the header anchors

```


This



is



used



to



make



the



page



longer


```

### End of the page
