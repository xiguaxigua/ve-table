# Introduction

name | age
---- | ---
LearnShare | 12
Mike |  32

```html
/*vue*/
<desc>
Hello `world`
* a
* b
</desc>
<template>
  <div>
    <div className='wrapper'>
      <ve-table
        :data="tableData"
        :columns="tableColumns"
        :settings="tableSettings"
        :pagination="paginationSettings"
        :page.sync="page"
        :page-size.sync="pageSize"
        :total="40"
        pagination-visible
        @cell-click="cellClickHandler">
        <div
          slot="date"
          slot-scope="{ value }">
          {{ value }} !
        </div>
        <div
          slot="__expand"
          slot-scope="{ row }">
          {{ row['date'] }}
        </div>
      </ve-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    this.tableSettings = {
      __expand: true,
      border: true
    }
    this.paginationSettings = {
      show: true
    }
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        num: 123123
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        num: 123123
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        num: 123123
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        num: 123123
      }],
      tableColumns: [
        { label: '日期', prop: 'date', __slot: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num', __type: 'number', __format: '0,0' }
      ],
      page: 1,
      pageSize: 20
    }
  },
  created () {
    window.VE_TABLE_DEFAULT = {
      layout: '->, total, prev, pager, next, jumper',
      pageSize: 30,
      pageSizes: [20, 30, 40]
    }
  },
  methods: {
    cellClickHandler () {
      console.log(arguments)
    }
  }
}
</script>
```
