<template>
  <div class="component">
    <el-table
      ref="table"
      :data="data"
      v-bind="settings"
      v-on="$listeners">
      <el-table-column
        v-for="column in innerColumns"
        v-bind="column"
        :key="column.__id">
        <template slot-scope="{ row }">
          <slot
            v-if="column.__slot"
            :row="row"
            :column="column"
            :value="row[column.prop]"
            :name="column.__slot" />
          <div v-else-if="column.__type === 'value'">
            {{ getValue(row[column.prop], column.__format) }}
          </div>
          <div v-else>
            {{ row[column.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="paginationVisible"
      v-bind="pagination"
      :layout="innerLayout"
      :page-sizes="innerPageSizes"
      :page-size.sync="innerPageSize"
      :current-page.sync="innerPage"
      :total="total"
      @size-change="sizeChangeHandler">
      <slot name="_paginationSlot"/>
    </el-pagination>
  </div>
</template>

<script>
import { isObject, clone } from 'utils-lite'
import numerify from 'numerify'

export default {
  name: 'VeTable',

  props: {
    data: {
      required: true,
      type: Array
    },
    columns: {
      required: true,
      type: Array
    },
    keyProp: {
      type: String,
      default: '__index'
    },
    settings: {
      type: Object,
      default () { return {} }
    },
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 0
    },
    pagination: {
      type: Object,
      default () { return {} }
    },
    valueFormat: {
      type: Function,
      default: null
    },
    paginationVisible: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    innerColumns ({ columns, keyProp, settings }) {
      return columns.map((column, index) => {
        let result = clone(column)
        if (!isObject(column)) result = { label: column, prop: column }
        result.__id = keyProp === '__auto'
          ? `${column.prop}-${index}-${Math.random()}-${Date.now()}`
          : keyProp === '__index'
            ? index : column[keyProp]
        result.__sortMethod = result.sortMethod || settings.__sortMethod || null
        return result
      })
    },

    innerPage: {
      get () { return this.page },
      set (v) { this.$emit('update:page', v) }
    },

    innerPageSize: {
      get () {
        return this.pageSize ||
          this.pagination.pageSize ||
          this.globalSettings.pageSize
      },
      set (v) {
        this.$emit('update:pageSize', v)
      }
    },

    pageSlots ({ pagination }) {
      return pagination.__slots || []
    },

    innerLayout ({ globalSettings, pagination }) {
      return globalSettings.layout || pagination.layout
    },

    innerPageSizes ({ globalSettings, pagination }) {
      return globalSettings.pageSizes || pagination.pageSizes
    }
  },

  created () {
    this.globalSettings = window.VE_TABLE_DEFAULT || {}
  },

  methods: {
    sizeChangeHandler (size) {
      this.innerPageSize = size
    },

    getValue (value, format) {
      return this.valueFormat
        ? this.valueFormat(value, format)
        : numerify(value, format)
    }
  }
}
</script>
