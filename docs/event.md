# 事件监听

事件的监听与 el-table 相一致，使用时参考 el-table 文档即可。

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
      @cell-click="cellClickHandler"
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
  },
  methods: {
    cellClickHandler (v) {
      window.alert('当前点击行的日期为' + v.date)
    }
  }
}
</script>
```


