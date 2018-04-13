<template>
    <div class="">
      <div>终点</div>
      <am-select v-model="selectValue"></am-select>
    </div>
</template>

<script>
import AmSelect from '../../components/select/AmSelect.vue'
export default {
  components: {AmSelect},
  data: () => ({
    selectValue: {
      label: '起点',
      value: ''
    }
  })
}
</script>

<style lang='scss'>
</style>
