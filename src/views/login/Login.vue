<template>
  <div class="am-background">
    <div>
      <div class="am-h3 text-center login-tietle">滴约车</div>
      <div class="am-input am-margin-center">
        <div class="input_tip_text" :class="{active:focus_num}">请输入您的手机号码</div>
        <a class="am-input-icon iconfont icon-mobilephone_fill"></a>
        <input   placeholder="" @focus="numFocus" @focusout="numFocusOut" v-model="input_num"/>
      </div>
      <div class="am-input am-margin-center am-margin-top-1">
        <div class="input_tip_text" :class="{active:focus_psw}">请输入您的密码</div>
        <a class="am-input-icon iconfont icon-icon-"></a>
        <input   placeholder="" @focus="pswFocus" @focusout="pswFocusOut" v-model="input_psw"/>
      </div>
      <div class="router-text">没有账号？<router-link class="am-router-text" to="/resign">注册</router-link></div>
      <div class="am-margin-top-3"><button class="am-btn am-margin-center" @click="login">登陆</button></div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    input_num: '',
    input_psw: '',
    focus_num: false,
    focus_psw: false
  }),
  methods: {
    login () {
      this.$router.push({path: '/main'})
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
  .input_tip_text{
    pointer-events: none;
    margin-top: 0.3rem;
    &.active{
      transform: translate(0,0) scale(0.9);
    }
    transform: translate(1rem,1rem);
    transition: transform 0.5s;
    font-size: 0.5rem;
    transform-origin: left bottom;
  }
  .login-tietle{
    margin: 3rem auto 1rem
  }
  .router-text{
    position: relative;
    margin:0.5rem  0 0 4.5rem;
  }

</style>
