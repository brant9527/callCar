<template>
    <div class="">
      <div></div>
    </div>
</template>

<script>
export default {
  data: () => ({
    myOrder: []
  }),
  methods: {
    getList () {
      this.$axios.get('/car/gettripByPhone').then(res => {
        this.myOrder.push(res.data.carList)
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
