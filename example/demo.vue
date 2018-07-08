<template>
  <div class="page-demo">
    <ve-table :settings="tableSettings">
      <div slot="table">
        <!-- eslint-disable -->
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column label="地址">
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </ve-table>
  </div>
</template>

<script>
import VeTable from '../src/ve-table'
import ElTable from 'element-ui/lib/table'
import ElTableColumn from 'element-ui/lib/table-column'

export default {
  name: 'Demo',
  components: {
    ElTable,
    ElTableColumn,
    VeTable
  },
  props: {},
  data () {
    this.tableSettings = {
      __expand: true,
      border: true,
      __tableSlot: 'table'
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
      // tableColumns: ['date', 'name', 'address'],
      tableColumns: [
        { label: '日期', prop: 'date', __slot: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '数值', prop: 'num', __type: 'value', __format: '0,0' }
      ],
      page: 1,
      pageSize: 20
    }
  },
  computed: {},
  watch: {},
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

<style lang="less">
body {
  background-color: #eee;
}

.page-demo {
  background-color: #fff;
}
</style>
