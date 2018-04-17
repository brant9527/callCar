<template>
    <div class="">
    </div>
</template>

<script>
import Iscroll from 'iscroll'
export default {
  data: () => ({
  }),
  methods: {
    refresh () {
    }
  },
  mounted () {
    this.$iscroll = new Iscroll(this.$el)
  },
  destroyed () {
    this.$IScroll.destroy()
  }
}
</script>

<style lang='scss'>
</style>
