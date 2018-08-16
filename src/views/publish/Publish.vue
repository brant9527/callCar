<template>
    <div class="">
        <mt-field label="起点" placeholder="请输入起点" v-model="startAddress"></mt-field>
        <mt-field label="终点" placeholder="请输入终点" v-model="endAddress"></mt-field>
        <mt-field label="联系方式" placeholder="手机号或微信号" v-model="contact"></mt-field>
        <mt-radio title="您是？" v-model="roleValue" :options=options> </mt-radio>
        <mt-cell title="上班时间"><div class="timeSlect" @click="openPicker">{{pickerVisible}}</div></mt-cell>
        <mt-datetime-picker v-model="pickerVisible"  ref="picker" type="time" @confirm="handleConfirm"></mt-datetime-picker>
        <mt-field label="备注" placeholder="请输入备注内容" type="textarea" rows="4" v-model="introduction"></mt-field>
        <div class="commit"><mt-button type="default" size="large" @click="commit">{{isPulishNew?'提交信息':'修改信息'}}</mt-button></div>

    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data: () => ({
    startAddress: '',
    endAddress: '',
    pickerVisible: '点击此处选择时间',
    contact: '',
    roleValue: '',
    options: [
      {
        label: '司机',
        value: '1'
      },
      {
        label: '乘客',
        value: '2'
      }
    ],
    introduction: '',
    isPulishNew: true,
    _id: ''
  }),
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (value) {
      console.log(value)
    },
    commit () {
      let accountId = window.localStorage.getItem('accountId')
      if (!this.startAddress) {
        MessageBox.alert('请输入起点')
        return false
      } else if (!this.endAddress) {
        MessageBox.alert('请输入终点')
        return false
      } else if (!this.contact) {
        MessageBox.alert('请输入联系方式')
        return false
      } else if (!this.roleValue) {
        MessageBox.alert('请选择角色')
        return false
      } else if (!this.pickerVisible) {
        MessageBox.alert('请选择到达时间')
        return false
      }
      let form = {
        startAddress: this.fnFilter(this.startAddress),
        endAddress: this.fnFilter(this.endAddress),
        pickerVisible: this.pickerVisible,
        contact: this.fnFilter(this.contact),
        roleValue: Number(this.roleValue),
        introduction: this.introduction,
        creatTime: new Date().getTime(),
        accountId: accountId
      }
      if (!this.isPulishNew) {
        form._id = this._id
      }
      this.$axios.post(this.isPulishNew ? '/car/settrip' : '/car/updatetrip', form).then(res => {
        if (res.data && res.data.result) {
          if (this.isPulishNew) {
            MessageBox.alert('提交成功')
          } else {
            MessageBox.alert('修改成功')
          }
          this.$router.push('/main')
        }
      }).catch(() => {
        MessageBox.alert('提交信息失败')
      })
    },
    fnFilter (str) {
      let checkNick = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]\".<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]")
      return str.replace(checkNick, '')
    }
  },
  created () {
    if (this.$route.query && this.$route.query.data) {
      this.isPulishNew = false

      let oDetail = JSON.parse(this.$route.query.data)
      console.log(oDetail)
      if (oDetail) {
        this.startAddress = oDetail.startAddress
        this.endAddress = oDetail.endAddress
        this.pickerVisible = oDetail.pickerVisible
        this.contact = oDetail.contact
        this.roleValue = oDetail.roleValue + ''
        this.introduction = oDetail.introduction
        this._id = oDetail._id
      }
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
