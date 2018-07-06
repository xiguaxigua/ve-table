import Component from './component'

function install (Vue, _) {
  Vue.component('Component', Component)
}

export default Component
export { install }
