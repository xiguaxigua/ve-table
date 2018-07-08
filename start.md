# 开始使用

## 引入组件

```js
import Vue from 'vue'
import VeTable from 've-table'
Vue.component(VeTable.name, VeTable)
new Vue({
  ...
})
```

> 样式文件需要自行引入, 对应不同版本的 element-ui 样式的路径不完全相同，可以根据 element-ui
文档进行选择。

## 基本用法

```html
/*vue*/
<desc>
data 表示表格数据，columns 表示表格的指标维度信息。

columns 的格式支持两种:

1. 如实例中所示的数组中是对象
2. 简化格式为数组中直接使用字符串

`['date', 'name', 'address', 'num']`
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :columns="tableColumns" />
  </div>
</template>

<script>
const tableData = [
  { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
]
export default {
  data () {
    return {
      tableData,
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

## 增加分页

```html
/*vue*/
<desc>
增加分页需要额外设置三个属性：

`:page.sync="page"` 页码

`:total="total"` 总计

`:pagination-visible="true"` 开启分页功能

通过监听 page 的变化来获取数据，然后将数据内容赋值给 data 和 total 即可。
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :columns="tableColumns"
      :page.sync="page"
      :total="total"
      pagination-visible />
  </div>
</template>

<script>
const tableData = [
  { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
]
export default {
  data () {
    return {
      tableData,
      tableColumns: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' }
      ],
      page: 1,
      total: 30
    }
  },
  watch: {
    page: {
      immediate: true,
      handler () { /* get new data and total while page change */ }
    }
  }
}
</script>
```

