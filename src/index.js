import VeTable from './ve-table'

function install (Vue, _) {
  Vue.component(VeTable.name, VeTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default VeTable
