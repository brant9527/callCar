<template>
    <div class="am-background">
    <div>
      <div class="am-h3 text-center login-tietle">滴约车-注册</div>
      <div class="am-input am-margin-center">
        <div class="input_tip_text" :class="{active:focus_num}">请输入注册的手机号码</div>
        <a class="am-input-icon iconfont icon-mobilephone_fill"></a>
        <input   placeholder="" @focus="numFocus" @focusout="numFocusOut" v-model="input_num"/>
      </div>
      <div class="am-input am-margin-center am-margin-top-1">
        <div class="input_tip_text" :class="{active:focus_psw}">请输入初始密码</div>
        <a class="am-input-icon iconfont icon-icon-"></a>
        <input   placeholder="" @focus="pswFocus" @focusout="pswFocusOut" v-model="input_psw"/>
      </div>
      <div class="router-text">已有账号？<router-link class="am-router-text" to="/">登陆</router-link></div>
      <div class="am-margin-top-3"><button class="am-btn am-margin-center" @click="resign">注册</button></div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data: () => ({
    input_num: '',
    input_psw: '',
    focus_num: false,
    focus_psw: false
  }),
  methods: {
    resign () {
      if (!this.input_num.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
        return MessageBox.alert('手机格式错误')
      }
      if (!this.input_psw || this.input_psw.length < 6 || this.input_psw.length > 12) {
        return MessageBox.alert('密码格式错误，请输入长度6-12位')
      }
      let form = {
        num: this.input_num,
        psw: this.input_psw
      }
      this.$axios.post('/resign', form).then(res => {
        if (res.data.result) {
          MessageBox.alert('注册成功').then(action => {
            if (res.data.result) this.login()
          })
        } else {
          MessageBox.alert('注册失败')
        }
      })
    },
    login () {
      this.$router.push({path: '/'})
    },
    numFocus () {
      if (this.input_num === '') this.focus_num = true
    },
    numFocusOut () {
      if (this.input_num === '') this.focus_num = false
    },
    pswFocus () {
      if (this.input_psw === '') this.focus_psw = true
    },
    pswFocusOut () {
      if (this.input_psw === '') this.focus_psw = false
    }
  }
}
</script>

<style lang='scss'>

  .login-tietle{
    margin: 3rem auto 1rem
  }
  .router-text{
    position: relative;
    margin:0.5rem  0 0 4.5rem;
  }

</style>
