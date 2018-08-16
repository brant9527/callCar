<template>
    <div class="">
      <div class="main-view">
      <router-view></router-view>
      </div>
      <tab-bar></tab-bar>
    </div>
</template>

<script>
import tabBar from '../../components/TabBar.vue'
export default {
  components: {
    tabBar
  },
  created () {
    let accountId = window.localStorage.getItem('accountId')
    if (accountId) {
      this.$axios.get('isLogin', {params: {accountId: accountId}}).then(res => {
        if (res.data.result) {
          this.$router.push('/main')
        } else {
          this.$router.push('/')
        }
      })
    } else {
      this.$router.push('/')
    }
  }

}
</script>

<style lang='scss'>
  .main-view{
    position: absolute;
    right:0;
    left: 0;
    top:0;
    bottom: 1.5rem;
  }
</style>
