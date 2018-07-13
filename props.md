# 属性详解

## data

表格数据内容。

- data 的数据格式为:

```js
[
  { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
]
```

## columns

表格指标维度内容。

- columns 的格式为：

```js
[
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  { label: '数值', prop: 'num' }
]
```

> 此外，columns 还支持简化格式 `['date', 'name', 'address', 'num']`

columns 中的 label 为显示在表头的文字，props 为数据中对应的字段，columns 中还支持全部与
element-ui 中 el-tabel-column 相对应的属性，例如：

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table :data="tableData" :columns="tableColumns" />
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
        { label: '日期', prop: 'date', width: 200, fixed: true },
        { label: '姓名', prop: 'name', width: 300 },
        { label: '地址', prop: 'address', width: 300 },
        { label: '数值', prop: 'num' }
      ]
    }
  }
}
</script>
```

此外，columns 中还支持一些特殊的属性，这些属性以 `__` 开头，用以区分 el-table-column 的属性

| 名称 | 描述 | 类型 | 默认值 |
| -- | -- | -- | -- |
| __type | 指标类型 | string | - |
| __format | 指标为数值时的格式化标识 | string | - |
| __slot | 指标自定义内容时的 slot 名称 | string | - |

`__type` 和 `__format` 主要用于处理数值的格式化, 其中，`__format` 的内容可以参考
[numerify](http://daxigua.me/numerify) 的文档进行设置

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table :data="tableData" :columns="tableColumns" />
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
        { label: '数值', prop: 'num', __type: 'number', __format: '0,0' }
      ]
    }
  }
}
</script>
```

`__slot` 用于自定义表格内容

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table :data="tableData" :columns="tableColumns">
      <div slot="address" slot-scope="{ row, column, value }">
        {{ value }} 1518 弄
      </div>
    </ve-table>
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
        { label: '地址', prop: 'address', __slot: 'address' },
        { label: '数值', prop: 'num' }
      ]
    }
  }
}
</script>
```


## settings

settings 用于设置表格的表现，属性值对应 el-table 的属性进行设置即可。

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :columns="tableColumns"
      :settings="settings" />
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
    this.settings = {
      border: true
    }
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

此外，settings 中还支持一些特殊的属性：

| 名称 | 描述 | 类型 | 默认值 |
| -- | -- | -- | -- |
| __expand | 是否增加展开行 | boolean | false |
| __sortMethod | 统一的排序方法 | function | - |
| __tableSlot | 是否使用替代默认 el-table 的 slot | boolean | - |

`__expend` 属性配置在表格中增加 `slot="__expend"` 的节点即可实现展开行功能。

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table :data="tableData" :settings="settings" :columns="tableColumns">
      <div slot="__expand" slot-scope="{ row }">
        {{ row['date'] }}
      </div>
    </ve-table>
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
    this.settings = {
      __expand: true
    }
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

## pagination

pagination 用于设置分页的表现，内容与 el-pagination 的属性相同。

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      pagination-visible
      :data="tableData"
      :pagination="pagination"
      :total="20"
      :columns="tableColumns">
    </ve-table>
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
    this.pagination = {
      layout: '->, total, prev, pager, next, jumper'
    }
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

在 pagination 中也支持增加 slot, 例如：

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      pagination-visible
      :data="tableData"
      :pagination="pagination"
      :total="20"
      :columns="tableColumns">
      <a href="javascript:void(0)" slot="__paginationSlot">下载</a>
    </ve-table>
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
    this.pagination = {
      layout: '->, total, prev, pager, next, jumper, slot'
    }
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

## 其他属性

### total
数据总数，用于配合实现分页功能
### page
页码，支持 `.sync`，用于配合实现分页功能
### pageSize
行数，支持 `.sync`，用于配合实现分页功能
### valueFormat
全局数值格式化，用于设置全局的 `__type = number` 的指标格式化
### paginationVisible
是否展示分页控件
### keyProp
用于设置 el-table-column 的 key，一般不需要设置

## 全局配置

ve-table 中的部分配置支持通过配置 `window.VE_TABLE_DEFAULT` 进行全局配置

| 属性名 | 描述 |
| -- | -- |
| layout | 分页组件的样式 |
| pageSizes | 分页组件中 pageSizes 属性 |
| pageSize | 分页组件中 pageSize 属性 |
