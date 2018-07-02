<template>
    <am-iscroll :iscrollClass="iscrollClass">
        <cardInfoItem v-for="item in myOrder" :key="item.id" :name="item.name" :creatTime="item.creatTime" :startAddress="item.startAddress" :endAddress="item.endAddress" :pickerVisible="item.pickerVisible" :headurl="item.headurl" :roleValue="item.roleValue" :contact="item.contact"></cardInfoItem>
    </am-iscroll>
</template>

<script>
import cardInfoItem from '../../components/carInfoItem/Main.vue'
export default {
  components: {cardInfoItem},
  data: () => ({
    myOrder: [],
    iscrollClass: {
      top: 1,
      bottom: 0
    }
  }),
  methods: {
    getList () {
      let accountId = window.localStorage.getItem('accountId')
      this.$axios.get('/car/gettripByPhone', {params: {accountId: accountId}}).then(res => {
        res.data.carList.forEach(item => {
          this.myOrder.push(item)
        })
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang='scss'>
</style>
