<template>
    <!-- <am-iscroll :iscrollClass="iscrollClass">
        <cardInfoItem v-for="(item,index) in myOrder" :index="index"   :isClose="true" :key="item.id" :oItem='item' @deleteItem="deleteItem"></cardInfoItem>
    </am-iscroll> -->
    <ul class="mint-iscroll"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="(item,index) in myOrder" :key="item.id">
            <cardInfoItem  :index="index"   :isClose="true" :key="item.id" :oItem='item' :type="2" @deleteItem="deleteItem"></cardInfoItem>

        </li>
      </ul>
</template>

<script>
import {MessageBox} from 'mint-ui'
import cardInfoItem from '../../components/carInfoItem/Main.vue'
export default {
  components: {cardInfoItem},
  data: () => ({
    myOrder: [],
    iscrollClass: {
      top: 0,
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
      }).catch(err => {
        MessageBox(err.response.data.message)
      })
    },
    deleteItem (index) {
      console.log(index)
      this.myOrder.splice(index, 1)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang='scss'>
.mint-iscroll{
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
</style>
