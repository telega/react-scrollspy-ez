# react-scrollspy-ez

> simple scrollspy component for react

[![NPM](https://img.shields.io/npm/v/react-scrollspy-ez.svg)](https://www.npmjs.com/package/react-scrollspy-ez) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[here](https://telega.github.io/react-scrollspy-ez/)

## Install

```bash
npm install --save react-scrollspy-ez
```

## Usage

```tsx
import * as React from "react";

import Scrollspy from "react-scrollspy-ez";

class Example extends React.Component {
  render() {
    return <Scrollspy ids={["one", "two"]} />;
  }
}
```

### Options

- `ids` - dom `id` of the page element to track
- `offset` - scroll offset (in pixels), if your page elements have lots of padding. Default is `2`.
- `itemContainerClassName` - class for the whole scrollspy menu
- `activeItemClassName` - class for the active menu item
- `containerElement` - a JSX element for the whole menu (default is `ul`)
- `itemElement` - a JSX element for each menu item, default is `li`

## License

MIT © [telega](https://github.com/telega)
