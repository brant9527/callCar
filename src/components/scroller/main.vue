<template>
    <div class="iscroll" :style="{top:iscrollClass.top+ 'rem',bottom:iscrollClass.bottom+'rem'}">
      <div class="wrap">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import Iscroll from 'iscroll'
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
        fadeScrollbars: false
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
    this.iscroll = new Iscroll(this.$el, this.config)
  },
  destroyed () {
    this.iscroll.destroy()
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
