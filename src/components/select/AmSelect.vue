<template>
    <div class="">
      <div class="am-select" :class="{active:flag}">
        <div class="item" v-tap="{methods: changeFlag}">{{selectValue.label}}
        <a class="iconfont icon icon-unfold"></a>
        </div>
        <ul v-if="flag">
          <a class="arrow"></a>
          <li v-for="item in propsList" :class="{active:selectValue.value === item.value}" :key="item.id" :value="item.value" v-tap='{methods: change}'>{{item.label}}
          <a class="iconfont icon icon-right"></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  data: () => ({
    flag: false,
    selectValue: {},
    propsList: [{
      value: 0,
      label: '护理'
    }, {
      value: 1,
      label: '金山'
    }]
  }),
  methods: {
    change (event) {
      this.selectValue = {
        value: event.event.target.value,
        label: event.event.target.textContent
      }
      this.$emit('input', this.selectValue)
      this.flag = false
    },
    changeFlag (event) {
      this.flag = true
    },
    mounted () {
      this.selectValue = this.value
    }
  }
}
</script>

<style lang='scss'>
</style>
