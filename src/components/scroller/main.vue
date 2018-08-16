<template>
    <div class="iscroll" :style="{top:iscrollClass.top+ 'rem',bottom:iscrollClass.bottom+'rem'}">
      <div class="wrap">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import Iscroll from 'iscroll'
let oIscroll = {}
export default {
  name: 'amIscroll',
  props: {
    config: {
      type: Object,
      default: _ => ({
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: false,
        click: true,
        tap: true
      })

    },
    iscrollClass: {
      type: Object,
      defalut: _ => ({
        top: 0,
        bottom: 0
      })
    }
  },
  data: () => ({
    iscroll: {}
  }),
  methods: {
    refresh () {
    }
  },
  mounted () {
    oIscroll = new Iscroll(this.$el, this.config)
  },
  destroyed () {
    oIscroll.destroy()
  }
}
</script>

<style lang='scss' scoped>
  .iscroll{
    position: absolute;
    /*height: 300px;*/
    width: 100%;
    overflow: hidden;
    .wrap{
      position: relative;
      overflow: hidden;
    }
  }
</style>
