# parcel-plugin-build-hooks
[![Latest release](http://img.shields.io/github/release/oreshinya/parcel-plugin-build-hooks.svg)](https://github.com/oreshinya/parcel-plugin-build-hooks/releases)

Parcel plugin for running command on build hooks.

## Installation

```
$ npm i --save parcel-plugin-build-hooks
```

## Usage

Configure commands in your `package.json`:

```json
{
  "name": "your-app",
  "main": "index.js",
  "dependencies": {
    "parcel-plugin-build-hooks": "^1.0.0"
  },
  "parcel-plugin-build-hooks": {
    "buildStart": "// Do something",
    "bundled": "// Do something",
    "buildEnd": "// Do something",
    "buildError": "// Do something"
  }
}
```

## LICENSE

MIT
