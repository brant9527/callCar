<template>
    <div class="">
      <div class="am-select" :class="{active:flag}" v-bind:style="{width:width+'rem',height:height+'rem'}" >
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
    value: Object,
    width: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 1
    },
    propsList: {
      type: Array
    },
    isBorder: {
      default: true,
      type: Boolean
    }
  },
  data: () => ({
    flag: false,
    selectValue: {}
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
    }
  },
  mounted () {
    this.selectValue = this.value
  }
}
</script>

<style lang='scss'>
</style>
