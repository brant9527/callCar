<template>
    <div class="">
      <div class="topTab">
        <am-select class="select-out" v-model="selectStart"  :isBorder="false" :propsList="propsList"></am-select>
        <am-select class="select-out" v-model="selectEnd"  :isBorder="false" :propsList="propsList"></am-select>
      </div>
      <am-iscroll :iscrollClass="iscrollClass">
        <cardInfoItem v-for="item in cardList" :key="item.id" :name="item.name" :creatTime="item.creatTime" :startAddress="item.startAddress" :endAddress="item.endAddress" :pickerVisible="item.pickerVisible" :headurl="item.headurl" :roleValue="item.roleValue" :contact="item.contact"></cardInfoItem>
      </am-iscroll>
    </div>
</template>

<script>
import AmSelect from '../../components/select/AmSelect.vue'
import cardInfoItem from '../../components/carInfoItem/Main.vue'
export default {
  components: {
    AmSelect,
    cardInfoItem},
  data: () => ({
    selectStart: {
      label: '选择起点',
      value: '-1'
    },
    selectEnd: {
      label: '选择终点',
      value: '-1'
    },
    propsList: [{
      value: 0,
      label: '湖里'
    }, {
      value: 1,
      label: '金山'
    }],
    cardList: [],
    iscrollClass: {
      top: 2,
      bottom: 0
    },
    now: 0,
    currentIndex: 0
  }),
  methods: {
    getinfo () {
      this.$axios.get('/car/gettrip', {params: {
        now: this.now,
        currentIndex: this.currentIndex
      }}).then(res => {
        if (res.data && res.data) {
          this.cardList.unshift(...res.data)
        }
      })
    }
  },
  created () {
    this.now = new Date().getTime()
    this.getinfo()
  },
  watch: {
    'selectStart': function (value) {
    }
  }
}
</script>

<style lang='scss' scoped>
  .select-out{
    display: inline-block;
    vertical-align: top;
    margin: 0.2rem;
  }
  .topTab{
    height: 2rem;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #dcdfe6;
  }
</style>
