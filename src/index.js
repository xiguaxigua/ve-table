import Component from './component'

function install (Vue, _) {
  Vue.component('Component', Component)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Component
