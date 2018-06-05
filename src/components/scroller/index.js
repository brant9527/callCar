import Main from './main.vue'

Main.install = function (Vue, options) {
  Vue.component(Main.name, Main)
}

export default Main
