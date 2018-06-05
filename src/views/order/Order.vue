<template>
    <div class="">
      <div class="topTab">
        <am-select class="select-out" v-model="selectStart"  :isBorder="false" :propsList="propsList"></am-select>
        <am-select class="select-out" v-model="selectEnd"  :isBorder="false" :propsList="propsList"></am-select>
      </div>
      <am-iscroll :iscrollClass="iscrollClass">
        <cardInfoItem v-for="item in cardList" :key="item.id" :name="item.name" :time="item.time" :start="item.start" :end="item.end" :money="item.money" :headurl="item.headurl"></cardInfoItem>
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
    cardList: [{
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }, {
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }, {
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }, {
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }, {
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }, {
      name: '我',
      time: '9:00',
      start: '金山',
      end: 'guanyinshan',
      money: '10',
      headurl: ''
    }],
    iscrollClass: {
      top: 2,
      bottom: 0
    }
  }),
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
