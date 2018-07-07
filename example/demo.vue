<template>
  <div class="page-demo">
    <ve-table
      :table-data="tableData"
      :table-columns="tableColumns"
    />
  </div>
</template>

<script>
import VeTable from '../src/ve-table'

export default {
  name: 'Demo',
  components: { VeTable },
  props: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableColumns: []
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="less">
body {
  background-color: #eee;
}
</style>
