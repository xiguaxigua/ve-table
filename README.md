## ve-table

> 基于 element-ui table 组件封装的表格组件, 同时支持 element-ui 1.x 与 2.x 版本的全部功能。

[![NPM downloads](http://img.shields.io/npm/dm/ve-table.svg)](https://npmjs.org/package/ve-table)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/ve-table/lib/index.min.js?compression=gzip&label=gzip%20size:%20JS)
[![Npm package](https://img.shields.io/npm/v/ve-table.svg)](https://www.npmjs.org/package/ve-table)
![Language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)

### 安装

```
npm i element-ui ve-table -S
```

### 快速上手

```html
<template>
  <div>
    <ve-table :data="tableData" :columns="tableColumns" />
  </div>
</template>

<script>
import VeTable from 've-table'

export default {
  components: { VeTable },
  data () {
    return {
      tableData: [
        { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: 123123 },
        { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: 123123 },
        { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
        { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
      ],
      tableColumns: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' }
      ]
    }
  }
}
</script>
```

### License

MIT
