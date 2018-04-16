<template>
    <div class="">

      <am-select class="select-out" v-model="selectStart"  :isBorder="false" :propsList="propsList"></am-select>
      <am-select class="select-out" v-model="selectEnd"  :isBorder="false" :propsList="propsList"></am-select>
    </div>
</template>

<script>
import AmSelect from '../../components/select/AmSelect.vue'
export default {
  components: {AmSelect},
  data: () => ({
    selectStart: {
      label: '选择起点',
      value: ''
    },
    selectEnd: {
      label: '选择终点',
      value: ''
    },
    propsList: [{
      value: 0,
      label: '湖里'
    }, {
      value: 1,
      label: '金山'
    }]
  }),
  watch: {
    'selectStart': function (value) {
      console.log(value)
    }
  }
}
</script>

<style lang='scss'>
  .select-out{
    display: inline-block;
    vertical-align: top;
    margin: 0.2rem;
  }
</style>
