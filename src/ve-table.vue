<template>
  <div class="component">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180" />
      <el-table-column
        prop="name"
        label="姓名"
        width="180" />
      <el-table-column
        prop="address"
        label="地址" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'VeTable',

  props: {
    tableData: {
      required: true,
      type: Array
    },
    tableColumns: {
      required: true,
      type: Array
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="less">

</style>
