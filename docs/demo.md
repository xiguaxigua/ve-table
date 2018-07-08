# 常用示例

## 数据分页加载

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      v-loading="loading"
      :data="tableData"
      :settings="settings"
      :columns="tableColumns"
      :page-size="10"
      :page.sync="page"
      :total="total"
      pagination-visible/>
  </div>
</template>

<script>
const tableData = [
  { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
]
export default {
  data () {
    this.settings = { height: 300 }
    return {
      tableData: [],
      tableColumns: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address'},
        { label: '数值', prop: 'num' }
      ],
      page: 1,
      total: 0,
      loading: false
    }
  },
  watch: {
    page: {
      immediate: true,
      handler: 'search'
    }
  },
  methods: {
    search () {
      this.loading = true
      setTimeout(_ => {
        this.loading = false,
        this.tableData = tableData
        this.total = 100
      }, 1000)
    }
  }
}
</script>
```

## 带斑马纹及边框的固定表头表格

```html
/*vue*/
<desc>
只要在ve-table元素settings中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
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
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: 123123 }
]
export default {
  data () {
    this.settings = {
      stripe: true,
      border: true,
      height: 200
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

## 带状态表格

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
      rowClassName({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'info-row';
        } else if (rowIndex === 3) {
          return 'positive-row';
        }
        return '';
      }
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

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
```

## 固定列

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
  { date: '2016-05', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05', name: '王小虎', address: '金沙江路', num: 123123 },
  { date: '2016-05', name: '王小虎', address: '金沙江路', num: 123123 }
]
export default {
  data () {
    return {
      tableData,
      tableColumns: [
        { label: '日期', prop: 'date', fixed: true },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' },
      ]
    }
  }
}
</script>
```

<!-- ## 多级表头 -->

<!-- ```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <div className='wrapper'>
      <ve-table :data="tableData" :columns="tableColumns">
        <el-table-column slot="mixinHeader" label="名称" prop="name"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="数值" prop="num"></el-table-column>
      </ve-table>
    </div>
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
        { label: '合并', __slot: 'mixinHeader' }
      ]
    }
  }
}
</script>
``` -->

## 单选

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      ref="table"
      :data="tableData"
      :columns="tableColumns"
      :settings="settings"
      @current-change="handleCurrentChange">
    </ve-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
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
      highlightCurrentRow: true
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
  },
  methods: {
    setCurrent(row) {
      this.$refs.table.$children[0].setCurrentRow(row)
    },
    handleCurrentChange (v) {
      console.log(v)
    }
  }
}
</script>
```

## 多选

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      ref="table"
      :data="tableData"
      :columns="tableColumns"
      :settings="settings"
      @selection-change="handleSelectionChange">
    </ve-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">
        切换第二、第三行的选中状态
      </el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
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
      __showCheckbox: true
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
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.$children[0].toggleRowSelection(row);
        });
      } else {
        this.$refs.table.$children[0].clearSelection();
      }
    },
    handleSelectionChange (val) {
      console.log(val)
    }
  }
}
</script>
```

## 排序

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :settings="settings"
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
    this.settings = {
      defaultSort: { prop: 'date', order: 'descending' }
    }
    return {
      tableData,
      tableColumns: [
        { label: '日期', prop: 'date', sortable: true },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num' }
      ]
    }
  }
}
</script>
```

## 筛选

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :settings="settings"
      :columns="tableColumns" />
  </div>
</template>

<script>
const tableData = [
  { date: '2016-05-02', name: '王小虎', address: '金沙江路', num: '家' },
  { date: '2016-05-04', name: '王小虎', address: '金沙江路', num: '家' },
  { date: '2016-05-01', name: '王小虎', address: '金沙江路', num: '公司' },
  { date: '2016-05-03', name: '王小虎', address: '金沙江路', num: '公司' }
]
export default {
  data () {
    this.settings = {}
    return {
      tableData,
      tableColumns: [
        { label: '日期', prop: 'date', sortable: true },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        {
          label: '位置',
          prop: 'num',
          filterPlacement: "bottom-end",
          filters: [
            { text: '家', value: '家' },
            { text: '公司', value: '公司' }
          ],
          filterMethod (value, row) {
            return row.num === value
          }
        }
      ]
    }
  }
}
</script>
```

## 表尾合计行

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <ve-table
      :data="tableData"
      :settings="settings"
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
    this.settings = {
      showSummary: true
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
