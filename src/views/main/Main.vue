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
