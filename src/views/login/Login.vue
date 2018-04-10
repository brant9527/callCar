<template>
  <div class="am-background">
    <div>
      <div class="am-h3 text-center login-tietle">滴约车</div>
      <div class="am-input am-margin-center">
        <a class="am-input-icon iconfont icon-mobilephone_fill"></a>
        <input   placeholder="请输入您的手机号码"/>
      </div>
      <div class="am-input am-margin-center am-margin-top-1">
        <a class="am-input-icon iconfont icon-icon-"></a>
        <input   placeholder="请输入您的密码"/>
      </div>
      <div class="router-text">没有账号？<router-link class="am-router-text" to="/resign">注册</router-link></div>
      <div class="am-margin-top-3"><button class="am-btn am-margin-center" @click="login">登陆</button></div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    login () {
      this.$router.push({path: '/main'})
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
