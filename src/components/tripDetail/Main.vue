<template>
    <div>
      <mt-cell title="起点" :value="oDetail.startAddress"></mt-cell>
      <mt-cell title="终点"  :value="oDetail.endAddress"></mt-cell>
      <mt-cell title="联系方式" :value="oDetail.contact"></mt-cell>
      <mt-cell title="角色"  :value="oDetail.roleValue?'车主':'乘客'"> </mt-cell>
      <mt-cell title="上班时间" :value='oDetail.pickerVisible'> </mt-cell>
      <mt-field label="自我介绍" readonly="readonly" type="textarea" rows="4" :value="oDetail.introduction"></mt-field>
    </div>
</template>
<script>
export default {
  props: {
    oDetail: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
