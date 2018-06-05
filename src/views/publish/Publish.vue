<template>
    <div class="">
        <mt-field label="起点" placeholder="请输入起点" v-model="startAddress"></mt-field>
        <mt-field label="终点" placeholder="请输入终点" v-model="endAddress"></mt-field>
        <mt-field label="联系方式" placeholder="手机号或微信号" v-model="contact"></mt-field>
        <mt-cell title="出发时间"><div class="timeSlect" @click="openPicker">{{pickerVisible}}</div></mt-cell>
        <mt-datetime-picker v-model="pickerVisible"  ref="picker" type="time" @confirm="handleConfirm"></mt-datetime-picker>
        <div class="commit"><mt-button type="default" size="large" @click="commit">提交信息</mt-button></div>
    </div>
</template>

<script>
export default {
  data: () => ({
    startAddress: '',
    endAddress: '',
    pickerVisible: '点击此处选择时间',
    contact: ''
  }),
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (value) {
      console.log(value)
    },
    commit () {
      console.log('提交')
    }
  }
}
</script>

<style lang='scss'>
.timeSlect{
  width: 190px;
  text-align:left
}
.commit{
  padding: 15px;
}
</style>
