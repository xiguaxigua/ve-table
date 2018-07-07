import VeTable from './ve-table'

function install (Vue, _) {
  Vue.component(VeTable.name, VeTable)
}

export default VeTable
export { install }
