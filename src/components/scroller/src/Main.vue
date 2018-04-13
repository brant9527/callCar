<template>
  <div class="iscroll" :style="maxStyle">
    <div class="iscroll-content"><slot></slot></div>
  </div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  name: 'MScroll',
  props: {
    config: {
      type: Object,
      default: _ => ({
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: false
      })
    },
    maxh: {
      type: String,
      default: '150px'
    }
  },
  methods: {
    refresh () {
      this.$IScroll.refresh()
    }
  },
  computed: {
    maxStyle () {
      let style = {}
      style.maxHeight = this.maxh
      return style
    }
  },
  mounted () {
    this.$IScroll = new IScroll(this.$el, this.config)
  },
  destroyed () {
    this.$IScroll.destroy()
  }
}
</script>
